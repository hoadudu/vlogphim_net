<?php

namespace App\Http\Controllers;


use App\Models\Video;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class VideoController extends Controller
{
    public function show(Request $request, string $slug, string $id): Response
    {
        $user = $request->user();
        $ip = $request->ip();

        $video = Video::with(['sources', 'hashtags'])
            ->where('status', 1)
            ->withExists(['likes as is_liked' => function ($query) use ($user, $ip) {
                if ($user) {
                    $query->where('user_id', $user->id);
                } else {
                    $query->where('ip_address', $ip);
                }
            }])
            ->findOrFail($id);

        // Load feed excluding the current video
        $videos = Video::with('sources')
            ->where('status', 1)
            ->where('id', '!=', $id)
            ->withExists(['likes as is_liked' => function ($query) use ($user, $ip) {
                if ($user) {
                    $query->where('user_id', $user->id);
                } else {
                    $query->where('ip_address', $ip);
                }
            }])
            ->latest()
            ->cursorPaginate(5);

        return Inertia::render('Video', [
            'video' => $video,
            'videos' => $videos,
        ])->withViewData([
            'meta' => [
                'title' => $video->title . ' - VlogPhim',
                'description' => $video->description ?: 'Xem video ' . $video->title . ' tại VlogPhim',
                'image' => $video->thumbnail,
                'url' => route('video.show', ['slug' => $video->slug, 'id' => $video->id]),
            ],
        ]);
    }

    public function loadMore(Request $request)
    {
        $cursor = $request->input('cursor');
        $user = $request->user();
        $ip = $request->ip();

        $videos = Video::with(['sources', 'hashtags'])
            ->where('status', 1)
            ->withExists(['likes as is_liked' => function ($query) use ($user, $ip) {
                if ($user) {
                    $query->where('user_id', $user->id);
                } else {
                    $query->where('ip_address', $ip);
                }
            }])
            ->latest()
            ->cursorPaginate(5);

        return response()->json($videos);
    }

    public function incrementView($id)
    {
        Video::where('id', $id)->increment('views');
        return response()->json(['success' => true]);
    }

    public function toggleLike(Request $request, $id)
    {
        $video = Video::findOrFail($id);
        $user = $request->user();
        $ip = $request->ip();

        $query = $video->likes();
        if ($user) {
            $query->where('user_id', $user->id);
        } else {
            $query->where('ip_address', $ip);
        }

        $like = $query->first();

        if ($like) {
            $like->delete();
            $video->decrement('likes');
            $liked = false;
        } else {
            $video->likes()->create([
                'user_id' => $user ? $user->id : null,
                'ip_address' => $ip,
                'user_agent' => $request->userAgent()
            ]);
            $video->increment('likes');
            $liked = true;
        }

        return response()->json(['liked' => $liked, 'likes_count' => $video->likes]);
    }

    public function share($id)
    {
        Video::where('id', $id)->increment('shares');
        return response()->json(['success' => true]);
    }

    public function hashtag(Request $request, string $slug): Response
    {
        $hashtag = \App\Models\Hashtag::where('slug', $slug)->firstOrFail();

        $user = $request->user();
        $ip = $request->ip();

        $videos = $hashtag->videos()
            ->with('sources')
            ->where('status', 1)
            ->withExists(['likes as is_liked' => function ($query) use ($user, $ip) {
                if ($user) {
                    $query->where('user_id', $user->id);
                } else {
                    $query->where('ip_address', $ip);
                }
            }])
            ->latest()
            ->cursorPaginate(10);

        return Inertia::render('Hashtag', [
            'hashtag' => $hashtag,
            'videos' => $videos,
        ])->withViewData([
            'meta' => [
                'title' => '#' . $hashtag->name . ' - VlogPhim',
                'description' => 'Các video thuộc hashtag #' . $hashtag->name . ' tại VlogPhim',
            ]
        ]);
    }
}
