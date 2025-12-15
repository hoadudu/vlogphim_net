<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VideoLike extends Model
{
    protected $fillable = [
        'video_id',
        'user_id',
        'ip_address',
        'user_agent',
    ];

    public function video()
    {
        return $this->belongsTo(Video::class);
    }
}
