<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Video extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'description',
        'thumb_url',
        'duration',
        'views',
        'likes',
        'shares',
        'status',
    ];

    public function sources(): HasMany
    {
        return $this->hasMany(VideoSource::class)->orderBy('priority', 'asc');
    }

    protected $appends = ['thumbnail'];

    public function likes(): HasMany
    {
        return $this->hasMany(VideoLike::class);
    }

    public function getThumbnailAttribute()
    {
        $value = $this->attributes['thumb_url'] ?? null;
        if (!$value) return null;

        if (filter_var($value, FILTER_VALIDATE_URL)) {
            return $value;
        }

        return asset('storage/' . $value);
    }

    public function hashtags(): \Illuminate\Database\Eloquent\Relations\BelongsToMany
    {
        return $this->belongsToMany(Hashtag::class, 'hashtag_video');
    }
}
