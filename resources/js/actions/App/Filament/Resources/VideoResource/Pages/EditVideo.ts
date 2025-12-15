import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../../wayfinder'
/**
* @see \App\Filament\Resources\VideoResource\Pages\EditVideo::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/EditVideo.php:7
 * @route '/admin/videos/{record}/edit'
 */
const EditVideo = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditVideo.url(args, options),
    method: 'get',
})

EditVideo.definition = {
    methods: ["get","head"],
    url: '/admin/videos/{record}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Filament\Resources\VideoResource\Pages\EditVideo::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/EditVideo.php:7
 * @route '/admin/videos/{record}/edit'
 */
EditVideo.url = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return EditVideo.definition.url
            .replace('{record}', parsedArgs.record.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Filament\Resources\VideoResource\Pages\EditVideo::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/EditVideo.php:7
 * @route '/admin/videos/{record}/edit'
 */
EditVideo.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: EditVideo.url(args, options),
    method: 'get',
})
/**
* @see \App\Filament\Resources\VideoResource\Pages\EditVideo::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/EditVideo.php:7
 * @route '/admin/videos/{record}/edit'
 */
EditVideo.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: EditVideo.url(args, options),
    method: 'head',
})

    /**
* @see \App\Filament\Resources\VideoResource\Pages\EditVideo::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/EditVideo.php:7
 * @route '/admin/videos/{record}/edit'
 */
    const EditVideoForm = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: EditVideo.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Filament\Resources\VideoResource\Pages\EditVideo::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/EditVideo.php:7
 * @route '/admin/videos/{record}/edit'
 */
        EditVideoForm.get = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditVideo.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Filament\Resources\VideoResource\Pages\EditVideo::__invoke
 * @see app/Filament/Resources/VideoResource/Pages/EditVideo.php:7
 * @route '/admin/videos/{record}/edit'
 */
        EditVideoForm.head = (args: { record: string | number } | [record: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: EditVideo.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    EditVideo.form = EditVideoForm
export default EditVideo