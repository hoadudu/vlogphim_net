import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Filament\Resources\VideoResource\Pages\ListVideos::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/ListVideos.php:7
 * @route '/admin/videos'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/videos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\VideoResource\Pages\ListVideos::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/ListVideos.php:7
 * @route '/admin/videos'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\VideoResource\Pages\ListVideos::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/ListVideos.php:7
 * @route '/admin/videos'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\VideoResource\Pages\ListVideos::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/ListVideos.php:7
 * @route '/admin/videos'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\VideoResource\Pages\ListVideos::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/ListVideos.php:7
 * @route '/admin/videos'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\VideoResource\Pages\ListVideos::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/ListVideos.php:7
 * @route '/admin/videos'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\VideoResource\Pages\ListVideos::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/ListVideos.php:7
 * @route '/admin/videos'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Filament\Resources\VideoResource\Pages\CreateVideo::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/CreateVideo.php:7
 * @route '/admin/videos/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/videos/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\VideoResource\Pages\CreateVideo::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/CreateVideo.php:7
 * @route '/admin/videos/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Filament\Resources\VideoResource\Pages\CreateVideo::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/CreateVideo.php:7
 * @route '/admin/videos/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\VideoResource\Pages\CreateVideo::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/CreateVideo.php:7
 * @route '/admin/videos/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\VideoResource\Pages\CreateVideo::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/CreateVideo.php:7
 * @route '/admin/videos/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\VideoResource\Pages\CreateVideo::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/CreateVideo.php:7
 * @route '/admin/videos/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\VideoResource\Pages\CreateVideo::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/CreateVideo.php:7
 * @route '/admin/videos/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Filament\Resources\VideoResource\Pages\EditVideo::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/EditVideo.php:7
 * @route '/admin/videos/{record}/edit'
 */
export const edit = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/videos/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\VideoResource\Pages\EditVideo::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/EditVideo.php:7
 * @route '/admin/videos/{record}/edit'
 */
edit.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { record: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    record: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        record: args.record,
                }

    return edit.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\VideoResource\Pages\EditVideo::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/EditVideo.php:7
 * @route '/admin/videos/{record}/edit'
 */
edit.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\VideoResource\Pages\EditVideo::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/EditVideo.php:7
 * @route '/admin/videos/{record}/edit'
 */
edit.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\VideoResource\Pages\EditVideo::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/EditVideo.php:7
 * @route '/admin/videos/{record}/edit'
 */
    const editForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\VideoResource\Pages\EditVideo::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/EditVideo.php:7
 * @route '/admin/videos/{record}/edit'
 */
        editForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\VideoResource\Pages\EditVideo::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/EditVideo.php:7
 * @route '/admin/videos/{record}/edit'
 */
        editForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
const videos = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
edit: Object.assign(edit, edit),
}

export default videos