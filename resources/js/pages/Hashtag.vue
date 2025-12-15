<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
import { Hashtag, Video } from '@/types';

const props = defineProps<{
    hashtag: Hashtag;
    videos: { data: Video[] };
}>();
</script>

<template>
    <Head :title="`#${hashtag.name}`" />
    <MainLayout>
        <div class="h-full w-full bg-black flex flex-col pt-16 px-4">
             <div class="mb-4 flex items-center gap-3">
                 <div class="p-3 bg-red-600 rounded-lg shadow-lg">
                    <span class="text-2xl font-bold text-white">#</span>
                 </div>
                 <div>
                     <h1 class="text-xl font-bold text-white leading-none">#{{ hashtag.name }}</h1>
                     <span class="text-sm text-gray-400 font-light mt-1 block">{{ videos.data.length }} videos</span>
                 </div>
             </div>

             <div class="flex-1 overflow-y-auto pb-20 no-scrollbar">
                 <div v-if="videos.data.length === 0" class="text-center text-gray-500 mt-10">
                     <p>No videos found for this hashtag.</p>
                 </div>
                 <div class="grid grid-cols-2 gap-3">
                     <Link
                        v-for="video in videos.data"
                        :key="video.id"
                        :href="`/v/${video.slug}-${video.id}`"
                        class="relative aspect-[9/16] bg-gray-900 rounded-lg overflow-hidden group shadow-sm hover:shadow-md transition-all border border-transparent hover:border-white/10"
                    >
                        <img
                            :src="video.thumbnail"
                            class="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition duration-500"
                            loading="lazy"
                        />
                        <!-- Gradient Overlay -->
                        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80"></div>

                        <div class="absolute inset-x-0 bottom-0 p-3">
                            <h3 class="text-xs font-bold text-white line-clamp-2 leading-tight mb-1">{{ video.title }}</h3>
                            <div class="flex items-center text-[10px] text-gray-400">
                                <span class="mr-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-2.5 h-2.5">
                                      <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                                      <path fill-rule="evenodd" d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" clip-rule="evenodd" />
                                    </svg>
                                </span>
                                <span>{{ video.views.toLocaleString() }}</span>
                            </div>
                        </div>
                     </Link>
                 </div>
             </div>
        </div>
    </MainLayout>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
    display: none;
}
.no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
