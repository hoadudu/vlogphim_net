<?php

namespace App\Http\Controllers;


use App\Models\Video;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        $videos = Video::with(['sources', 'hashtags'])
            ->where('status', 1)
            ->latest()
            ->cursorPaginate(5); // Start with 5 for faster load, infinite scroll will handle rest

        return Inertia::render('Home', [
            'videos' => $videos,
        ])->withViewData([
            'meta' => [
                'title' => 'VlogPhim - Video Dọc Giải Trí',
                'description' => 'Xem video ngắn, hài hước, giải trí nhanh trên VlogPhim.',
                'image' => asset('apple-touch-icon.png'), // Or a generic OG image
            ],
        ]);
    }
}
