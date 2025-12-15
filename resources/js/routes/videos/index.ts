import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
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
const videos = {
    loadMore: Object.assign(loadMore, loadMore),
}

export default videos