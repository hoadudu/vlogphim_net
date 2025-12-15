import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
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
* @see \App\Http\Controllers\VideoController::hashtag
 * @see app/Http/Controllers/VideoController.php:121
 * @route '/hashtag/{slug}'
 */
export const hashtag = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: hashtag.url(args, options),
    method: 'get',
})

hashtag.definition = {
    methods: ["get","head"],
    url: '/hashtag/{slug}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\VideoController::hashtag
 * @see app/Http/Controllers/VideoController.php:121
 * @route '/hashtag/{slug}'
 */
hashtag.url = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { slug: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    slug: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        slug: args.slug,
                }

    return hashtag.definition.url
            .replace('{slug}', parsedArgs.slug.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\VideoController::hashtag
 * @see app/Http/Controllers/VideoController.php:121
 * @route '/hashtag/{slug}'
 */
hashtag.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: hashtag.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\VideoController::hashtag
 * @see app/Http/Controllers/VideoController.php:121
 * @route '/hashtag/{slug}'
 */
hashtag.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: hashtag.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\VideoController::hashtag
 * @see app/Http/Controllers/VideoController.php:121
 * @route '/hashtag/{slug}'
 */
    const hashtagForm = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: hashtag.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\VideoController::hashtag
 * @see app/Http/Controllers/VideoController.php:121
 * @route '/hashtag/{slug}'
 */
        hashtagForm.get = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: hashtag.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\VideoController::hashtag
 * @see app/Http/Controllers/VideoController.php:121
 * @route '/hashtag/{slug}'
 */
        hashtagForm.head = (args: { slug: string | number } | [slug: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: hashtag.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    hashtag.form = hashtagForm
/**
* @see \App\Http\Controllers\VideoController::loadMore
 * @see app/Http/Controllers/VideoController.php:56
 * @route '/api/videos'
 */
export const loadMore = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: loadMore.url(options),
    method: 'get',
})

loadMore.definition = {
    methods: ["get","head"],
    url: '/api/videos',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\VideoController::loadMore
 * @see app/Http/Controllers/VideoController.php:56
 * @route '/api/videos'
 */
loadMore.url = (options?: RouteQueryOptions) => {
    return loadMore.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\VideoController::loadMore
 * @see app/Http/Controllers/VideoController.php:56
 * @route '/api/videos'
 */
loadMore.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: loadMore.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\VideoController::loadMore
 * @see app/Http/Controllers/VideoController.php:56
 * @route '/api/videos'
 */
loadMore.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: loadMore.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\VideoController::loadMore
 * @see app/Http/Controllers/VideoController.php:56
 * @route '/api/videos'
 */
    const loadMoreForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: loadMore.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\VideoController::loadMore
 * @see app/Http/Controllers/VideoController.php:56
 * @route '/api/videos'
 */
        loadMoreForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: loadMore.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\VideoController::loadMore
 * @see app/Http/Controllers/VideoController.php:56
 * @route '/api/videos'
 */
        loadMoreForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: loadMore.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    loadMore.form = loadMoreForm
/**
* @see \App\Http\Controllers\VideoController::incrementView
 * @see app/Http/Controllers/VideoController.php:77
 * @route '/api/videos/{id}/view'
 */
export const incrementView = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: incrementView.url(args, options),
    method: 'post',
})

incrementView.definition = {
    methods: ["post"],
    url: '/api/videos/{id}/view',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\VideoController::incrementView
 * @see app/Http/Controllers/VideoController.php:77
 * @route '/api/videos/{id}/view'
 */
incrementView.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return incrementView.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\VideoController::incrementView
 * @see app/Http/Controllers/VideoController.php:77
 * @route '/api/videos/{id}/view'
 */
incrementView.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: incrementView.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\VideoController::incrementView
 * @see app/Http/Controllers/VideoController.php:77
 * @route '/api/videos/{id}/view'
 */
    const incrementViewForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: incrementView.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\VideoController::incrementView
 * @see app/Http/Controllers/VideoController.php:77
 * @route '/api/videos/{id}/view'
 */
        incrementViewForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: incrementView.url(args, options),
            method: 'post',
        })
    
    incrementView.form = incrementViewForm
/**
* @see \App\Http\Controllers\VideoController::toggleLike
 * @see app/Http/Controllers/VideoController.php:83
 * @route '/api/videos/{id}/like'
 */
export const toggleLike = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleLike.url(args, options),
    method: 'post',
})

toggleLike.definition = {
    methods: ["post"],
    url: '/api/videos/{id}/like',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\VideoController::toggleLike
 * @see app/Http/Controllers/VideoController.php:83
 * @route '/api/videos/{id}/like'
 */
toggleLike.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return toggleLike.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\VideoController::toggleLike
 * @see app/Http/Controllers/VideoController.php:83
 * @route '/api/videos/{id}/like'
 */
toggleLike.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleLike.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\VideoController::toggleLike
 * @see app/Http/Controllers/VideoController.php:83
 * @route '/api/videos/{id}/like'
 */
    const toggleLikeForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: toggleLike.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\VideoController::toggleLike
 * @see app/Http/Controllers/VideoController.php:83
 * @route '/api/videos/{id}/like'
 */
        toggleLikeForm.post = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: toggleLike.url(args, options),
            method: 'post',
        })
    
    toggleLike.form = toggleLikeForm
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
const VideoController = { show, hashtag, loadMore, incrementView, toggleLike, share }

export default VideoController