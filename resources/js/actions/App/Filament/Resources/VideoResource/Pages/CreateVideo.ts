import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\VideoResource\Pages\CreateVideo::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/CreateVideo.php:7
 * @route '/admin/videos/create'
 */
const CreateVideo = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateVideo.url(options),
    method: 'get',
})

CreateVideo.definition = {
    methods: ["get","head"],
    url: '/admin/videos/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\VideoResource\Pages\CreateVideo::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/CreateVideo.php:7
 * @route '/admin/videos/create'
 */
CreateVideo.url = (options?: RouteQueryOptions) => {
    return CreateVideo.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\VideoResource\Pages\CreateVideo::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/CreateVideo.php:7
 * @route '/admin/videos/create'
 */
CreateVideo.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: CreateVideo.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\VideoResource\Pages\CreateVideo::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/CreateVideo.php:7
 * @route '/admin/videos/create'
 */
CreateVideo.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: CreateVideo.url(options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\VideoResource\Pages\CreateVideo::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/CreateVideo.php:7
 * @route '/admin/videos/create'
 */
    const CreateVideoForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: CreateVideo.url(options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\VideoResource\Pages\CreateVideo::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/CreateVideo.php:7
 * @route '/admin/videos/create'
 */
        CreateVideoForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateVideo.url(options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\VideoResource\Pages\CreateVideo::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/CreateVideo.php:7
 * @route '/admin/videos/create'
 */
        CreateVideoForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: CreateVideo.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    CreateVideo.form = CreateVideoForm
export default CreateVideo