<?php

namespace App\Filament\Resources\VideoResource\Pages;

use App\Filament\Resources\VideoResource;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateVideo extends CreateRecord
{
    protected static string $resource = VideoResource::class;

    protected function mutateFormDataBeforeCreate(array $data): array
    {
        if (!empty($data['fetch_thumb_url'])) {
            try {
                $url = $data['fetch_thumb_url'];
                $response = \Illuminate\Support\Facades\Http::withoutVerifying()
                    ->withHeaders([
                        'User-Agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                    ])
                    ->get($url);

                if ($response->successful()) {
                    $contents = $response->body();
                    $name = \Illuminate\Support\Str::random(40) . '.jpg'; // Simplistic extension assumption or detect from header
                    $path = 'videos/thumbs/' . $name;
                    \Illuminate\Support\Facades\Storage::disk('public')->put($path, $contents);
                    $data['thumb_url'] = $path;
                }
            } catch (\Exception $e) {
                // Log or ignore, maybe notify user? For MVP just ignore or rely on manual upload
            }
            unset($data['fetch_thumb_url']);
        }

        return $data;
    }
}
