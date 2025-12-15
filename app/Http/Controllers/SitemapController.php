<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Video;
use App\Models\Hashtag;

class SitemapController extends Controller
{
    public function index(): Response
    {
        $videos = Video::where('status', 1)->latest()->get();
        $hashtags = Hashtag::all();

        return response()->view('sitemap', [
            'videos' => $videos,
            'hashtags' => $hashtags,
        ])->header('Content-Type', 'text/xml');
    }
}
