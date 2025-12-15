import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\VideoResource\Pages\ListVideos::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/ListVideos.php:7
 * @route '/admin/videos'
 */
const ListVideos = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListVideos.url(options),
    method: 'get',
})

ListVideos.definition = {
    methods: ["get","head"],
    url: '/admin/videos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\VideoResource\Pages\ListVideos::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/ListVideos.php:7
 * @route '/admin/videos'
 */
ListVideos.url = (options?: RouteQueryOptions) => {
    return ListVideos.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\VideoResource\Pages\ListVideos::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/ListVideos.php:7
 * @route '/admin/videos'
 */
ListVideos.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: ListVideos.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\VideoResource\Pages\ListVideos::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/ListVideos.php:7
 * @route '/admin/videos'
 */
ListVideos.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: ListVideos.url(options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\VideoResource\Pages\ListVideos::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/ListVideos.php:7
 * @route '/admin/videos'
 */
    const ListVideosForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: ListVideos.url(options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\VideoResource\Pages\ListVideos::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/ListVideos.php:7
 * @route '/admin/videos'
 */
        ListVideosForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListVideos.url(options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\VideoResource\Pages\ListVideos::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/ListVideos.php:7
 * @route '/admin/videos'
 */
        ListVideosForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: ListVideos.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    ListVideos.form = ListVideosForm
export default ListVideos