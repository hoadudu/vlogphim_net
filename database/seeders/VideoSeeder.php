<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class VideoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $videos = [
            [
                'title' => 'Big Buck Bunny',
                'slug' => 'big-buck-bunny',
                'description' => 'A large and lovable rabbit deals with three tiny bullies, led by a flying squirrel, who are determined to squelch his happiness.',
                'thumb_url' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/800px-Big_buck_bunny_poster_big.jpg',
                'duration' => '09:56',
                'sources' => [
                    ['type' => 'mp4', 'source_url' => 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4']
                ]
            ],
            [
                'title' => 'Elephant Dream',
                'slug' => 'elephant-dream',
                'description' => 'The first open movie from Blender Foundation.',
                'thumb_url' => 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Elephants_Dream_poster_HO.jpg/800px-Elephants_Dream_poster_HO.jpg',
                'duration' => '10:53',
                'sources' => [
                    ['type' => 'mp4', 'source_url' => 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4']
                ]
            ],
            [
                'title' => 'For Bigger Blazes',
                'slug' => 'for-bigger-blazes',
                'description' => 'HBO GO now works with Chromecast -- the easiest way to enjoy online video.',
                'thumb_url' => 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
                'duration' => '00:15',
                'sources' => [
                    ['type' => 'mp4', 'source_url' => 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4']
                ]
            ],
            [
                'title' => 'For Bigger Escapes',
                'slug' => 'for-bigger-escapes',
                'description' => 'Introducing Chromecast. The easiest way to enjoy online video and music on your TV.',
                'thumb_url' => 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
                'duration' => '00:15',
                'sources' => [
                    ['type' => 'mp4', 'source_url' => 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4']
                ]
            ],
             [
                'title' => 'Sintel',
                'slug' => 'sintel',
                'description' => 'Sintel is an independently produced short film, initiated by the Blender Foundation.',
                'thumb_url' => 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
                'duration' => '14:48',
                'sources' => [
                   ['type' => 'mp4', 'source_url' => 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4']
                ]
            ],
            [
                'title' => 'Tears of Steel',
                'slug' => 'tears-of-steel',
                'description' => 'Tears of Steel was realized with crowd-funding by users of the open source 3D creation tool Blender.',
                'thumb_url' => 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/TearsOfSteel.jpg',
                'duration' => '12:14',
                'sources' => [
                    ['type' => 'mp4', 'source_url' => 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4']
                ]
            ]
        ];

        foreach ($videos as $data) {
            $sources = $data['sources'];
            unset($data['sources']);

            $video = \App\Models\Video::create($data);

            foreach ($sources as $source) {
                $video->sources()->create($source);
            }
        }
    }
}
