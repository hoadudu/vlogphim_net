<?php

namespace App\Http\Controllers;


use App\Models\Video;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class SearchController extends Controller
{
    public function index(Request $request): Response
    {
        $query = $request->input('q');

        $videos = Video::with('sources')
            ->where('status', 1)
            ->when($query, function ($q) use ($query) {
                return $q->where('title', 'like', "%{$query}%");
            })
            ->latest()
            ->paginate(20);

        $popularHashtags = \App\Models\Hashtag::withCount('videos')
            ->orderByDesc('videos_count')
            ->take(10)
            ->get();

        return Inertia::render('Search', [
            'videos' => $videos,
            'popularHashtags' => $popularHashtags,
            'filters' => $request->only(['q']),
        ])->withViewData([
            'meta' => [
                'title' => $query ? "Tìm kiếm: $query - VlogPhim" : 'Tìm kiếm Video - VlogPhim',
                'description' => $query ? "Kết quả tìm kiếm cho '$query' trên VlogPhim" : 'Tìm kiếm các video hấp dẫn trên VlogPhim',
            ],
        ]);
    }
}
