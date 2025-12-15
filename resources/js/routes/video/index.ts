import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\VideoController::show
 * @see app/Http/Controllers/VideoController.php:13
 * @route '/v/{slug}-{id}'
 */
export const show = (args: { slug: string | number, id: string | number } | [slug: string | number, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/v/{slug}-{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\VideoController::show
 * @see app/Http/Controllers/VideoController.php:13
 * @route '/v/{slug}-{id}'
 */
show.url = (args: { slug: string | number, id: string | number } | [slug: string | number, id: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    slug: args[0],
                    id: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        slug: args.slug,
                                id: args.id,
                }

    return show.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\VideoController::show
 * @see app/Http/Controllers/VideoController.php:13
 * @route '/v/{slug}-{id}'
 */
show.get = (args: { slug: string | number, id: string | number } | [slug: string | number, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\VideoController::show
 * @see app/Http/Controllers/VideoController.php:13
 * @route '/v/{slug}-{id}'
 */
show.head = (args: { slug: string | number, id: string | number } | [slug: string | number, id: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\VideoController::show
 * @see app/Http/Controllers/VideoController.php:13
 * @route '/v/{slug}-{id}'
 */
    const showForm = (args: { slug: string | number, id: string | number } | [slug: string | number, id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\VideoController::show
 * @see app/Http/Controllers/VideoController.php:13
 * @route '/v/{slug}-{id}'
 */
        showForm.get = (args: { slug: string | number, id: string | number } | [slug: string | number, id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\VideoController::show
 * @see app/Http/Controllers/VideoController.php:13
 * @route '/v/{slug}-{id}'
 */
        showForm.head = (args: { slug: string | number, id: string | number } | [slug: string | number, id: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\VideoController::view
 * @see app/Http/Controllers/VideoController.php:77
 * @route '/api/videos/{id}/view'
 */
export const view = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: view.url(args, options),
    method: 'post',
})

view.definition = {
    methods: ["post"],
    url: '/api/videos/{id}/view',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\VideoController::view
 * @see app/Http/Controllers/VideoController.php:77
 * @route '/api/videos/{id}/view'
 */
view.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return view.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\VideoController::view
 * @see app/Http/Controllers/VideoController.php:77
 * @route '/api/videos/{id}/view'
 */
view.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: view.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\VideoController::view
 * @see app/Http/Controllers/VideoController.php:77
 * @route '/api/videos/{id}/view'
 */
    const viewForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: view.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\VideoController::view
 * @see app/Http/Controllers/VideoController.php:77
 * @route '/api/videos/{id}/view'
 */
        viewForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: view.url(args, options),
            method: 'post',
        })
    
    view.form = viewForm
/**
* @see \App\Http\Controllers\VideoController::like
 * @see app/Http/Controllers/VideoController.php:83
 * @route '/api/videos/{id}/like'
 */
export const like = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: like.url(args, options),
    method: 'post',
})

like.definition = {
    methods: ["post"],
    url: '/api/videos/{id}/like',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\VideoController::like
 * @see app/Http/Controllers/VideoController.php:83
 * @route '/api/videos/{id}/like'
 */
like.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return like.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\VideoController::like
 * @see app/Http/Controllers/VideoController.php:83
 * @route '/api/videos/{id}/like'
 */
like.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: like.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\VideoController::like
 * @see app/Http/Controllers/VideoController.php:83
 * @route '/api/videos/{id}/like'
 */
    const likeForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: like.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\VideoController::like
 * @see app/Http/Controllers/VideoController.php:83
 * @route '/api/videos/{id}/like'
 */
        likeForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: like.url(args, options),
            method: 'post',
        })
    
    like.form = likeForm
/**
* @see \App\Http\Controllers\VideoController::share
 * @see app/Http/Controllers/VideoController.php:115
 * @route '/api/videos/{id}/share'
 */
export const share = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: share.url(args, options),
    method: 'post',
})

share.definition = {
    methods: ["post"],
    url: '/api/videos/{id}/share',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\VideoController::share
 * @see app/Http/Controllers/VideoController.php:115
 * @route '/api/videos/{id}/share'
 */
share.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return share.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\VideoController::share
 * @see app/Http/Controllers/VideoController.php:115
 * @route '/api/videos/{id}/share'
 */
share.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: share.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\VideoController::share
 * @see app/Http/Controllers/VideoController.php:115
 * @route '/api/videos/{id}/share'
 */
    const shareForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: share.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\VideoController::share
 * @see app/Http/Controllers/VideoController.php:115
 * @route '/api/videos/{id}/share'
 */
        shareForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: share.url(args, options),
            method: 'post',
        })
    
    share.form = shareForm
const video = {
    show: Object.assign(show, show),
view: Object.assign(view, view),
like: Object.assign(like, like),
share: Object.assign(share, share),
}

export default video