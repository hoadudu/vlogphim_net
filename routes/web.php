<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\SearchController;
use App\Http\Controllers\VideoController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/v/{slug}-{id}', [VideoController::class, 'show'])
    ->where([
        'slug' => '.*(?=-[0-9]+)',
        'id' => '[0-9]+'
    ])
    ->name('video.show');

Route::get('/sitemap.xml', [App\Http\Controllers\SitemapController::class, 'index'])->name('sitemap');
Route::get('/search', [SearchController::class, 'index'])->name('search.index');
Route::get('/hashtag/{slug}', [VideoController::class, 'hashtag'])->name('hashtag.show');

Route::get('/api/videos', [VideoController::class, 'loadMore'])->name('videos.loadMore');
Route::post('/api/videos/{id}/view', [VideoController::class, 'incrementView'])->name('video.view');
Route::post('/api/videos/{id}/like', [VideoController::class, 'toggleLike'])->name('video.like');
Route::post('/api/videos/{id}/share', [VideoController::class, 'share'])->name('video.share');
