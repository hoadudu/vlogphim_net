<?php

namespace App\Filament\Resources;

use App\Filament\Resources\VideoResource\Pages;
use App\Filament\Resources\VideoResource\RelationManagers;
use App\Models\Video;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class VideoResource extends Resource
{
    protected static ?string $model = Video::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Section::make('Video Details')
                    ->schema([
                        Forms\Components\TextInput::make('title')
                            ->required()
                            ->live(onBlur: true)
                            ->afterStateUpdated(fn (string $operation, $state, Forms\Set $set) => $operation === 'create' ? $set('slug', \Illuminate\Support\Str::slug($state)) : null)
                            ->maxLength(255),
                        Forms\Components\TextInput::make('slug')
                            ->required()
                            ->maxLength(255)
                            ->unique(ignoreRecord: true),
                        Forms\Components\Textarea::make('description')
                            ->columnSpanFull(),

                        Forms\Components\Group::make([
                            Forms\Components\FileUpload::make('thumb_url')
                                ->image()
                                ->directory('videos/thumbs')
                                ->imageEditor()
                                ->label('Thumbnail Image'),

                            Forms\Components\TextInput::make('fetch_thumb_url')
                                ->label('Or Fetch from URL (Leech)')
                                ->url()
                                ->live(onBlur: true)
                                ->placeholder('https://example.com/image.jpg')
                                ->helperText('Enter a URL to download and set as thumbnail. This overrides the uploaded file.'),
                        ]),

                        Forms\Components\TextInput::make('duration')
                            ->maxLength(255),
                        Forms\Components\Toggle::make('status')
                            ->required()
                            ->default(true),

                        Forms\Components\Select::make('hashtags')
                            ->relationship('hashtags', 'name')
                            ->multiple()
                            ->preload()
                            ->createOptionForm([
                                Forms\Components\TextInput::make('name')
                                    ->required()
                                    ->maxLength(255)
                                    ->live(onBlur: true)
                                    ->afterStateUpdated(fn (string $operation, $state, Forms\Set $set) => $set('slug', \Illuminate\Support\Str::slug($state))),
                                Forms\Components\TextInput::make('slug')
                                    ->required()
                                    ->maxLength(255)
                                    ->unique('hashtags', 'slug'),
                            ]),
                    ]),

                Forms\Components\Section::make('Metrics')
                    ->schema([
                        Forms\Components\TextInput::make('views')
                            ->required()
                            ->numeric()
                            ->default(0),
                        Forms\Components\TextInput::make('likes')
                            ->required()
                            ->numeric()
                            ->default(0),
                        Forms\Components\TextInput::make('shares')
                            ->required()
                            ->numeric()
                            ->default(0),
                    ])->columns(3),

                Forms\Components\Section::make('Video Sources')
                    ->schema([
                        Forms\Components\Repeater::make('sources')
                            ->relationship()
                            ->schema([
                                Forms\Components\Select::make('type')
                                    ->options([
                                        'hls' => 'HLS (m3u8)',
                                        'mp4' => 'MP4',
                                        'youtube' => 'YouTube',
                                        'drive' => 'Google Drive',
                                        'embed' => 'Embed',
                                        'facebook' => 'Facebook',
                                    ])
                                    ->required(),
                                Forms\Components\TextInput::make('source_url')
                                    ->required()
                                    ->maxLength(255)
                                    ->url(),
                                Forms\Components\TextInput::make('priority')
                                    ->numeric()
                                    ->default(0)
                                    ->required(),
                            ])
                            ->columns(3)
                            ->defaultItems(1)
                    ])
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('title')
                    ->searchable(),
                Tables\Columns\TextColumn::make('slug')
                    ->searchable(),
                Tables\Columns\ImageColumn::make('thumb_url')
                    ->label('Thumbnail'),
                Tables\Columns\TextColumn::make('duration')
                    ->searchable(),
                Tables\Columns\TextColumn::make('views')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('likes')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('shares')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('status')
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListVideos::route('/'),
            'create' => Pages\CreateVideo::route('/create'),
            'edit' => Pages\EditVideo::route('/{record}/edit'),
        ];
    }
}
