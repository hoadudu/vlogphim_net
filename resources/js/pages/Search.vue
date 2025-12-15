<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import { Head, Link, router } from '@inertiajs/vue3';
import { ref } from 'vue';

const props = defineProps(['videos', 'filters', 'popularHashtags']);
const search = ref(props.filters.q || '');

let timeout: any;
const onInput = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        router.get('/search', { q: search.value }, { preserveState: true, replace: true });
    }, 500);
};

</script>

<template>
    <Head title="Tìm kiếm" />
    <MainLayout>
        <div class="h-full w-full bg-black flex flex-col pt-16 px-4">
             <div class="mb-4">
                 <input
                    v-model="search"
                    @input="onInput"
                    type="text"
                    placeholder="Search videos..."
                    class="w-full bg-[#1a1a1a] border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-red-500 transition-all font-sans"
                    autofocus
                />
             </div>

             <div class="flex-1 overflow-y-auto pb-20 no-scrollbar">
                 <!-- Trending Hashtags -->
                 <div v-if="popularHashtags && popularHashtags.length > 0 && !search" class="mb-6">
                     <h3 class="text-sm font-bold text-white mb-3 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4 text-red-500">
                          <path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.981 9.75h3.75a.75.75 0 0 1 .75.75c0 2.485-2.099 4.5-4.688 4.5H9.68l-2.083 7.757a.75.75 0 0 1-1.453-.39L8.239 15H5.75a.75.75 0 0 1 0-1.5h3.197l1.995-7.757a.75.75 0 0 1 1.453.39L10.301 9.75h3.107l1.207-8.155a.75.75 0 0 1 .75-.75h.01Z" clip-rule="evenodd" />
                        </svg>
                        Trending Hashtags
                     </h3>
                     <div class="flex flex-wrap gap-2">
                         <Link
                            v-for="tag in popularHashtags"
                            :key="tag.id"
                            :href="`/hashtag/${tag.slug}`"
                            class="px-3 py-1.5 bg-[#1a1a1a] border border-gray-800 rounded-full text-sm text-gray-300 hover:text-white hover:border-gray-600 transition-colors"
                         >
                            #{{ tag.name }} <span class="text-xs text-gray-500 ml-1">{{ tag.videos_count }}</span>
                         </Link>
                     </div>
                 </div>

                 <div v-if="videos.data.length === 0" class="text-center text-gray-500 mt-10">
                     <p>No results found for "{{ search }}"</p>
                 </div>
                 <div class="grid grid-cols-2 gap-3">
                     <Link
                        v-for="video in videos.data"
                        :key="video.id"
                        :href="`/v/${video.slug}-${video.id}`"
                        class="relative aspect-[9/16] bg-gray-900 rounded-lg overflow-hidden group"
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
                                <span>{{ video.views }}</span>
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
