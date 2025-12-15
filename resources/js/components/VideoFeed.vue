<script setup lang="ts">
import { ref } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';
import VideoItem from '@/components/VideoItem.vue';
import type { Video as VideoType } from '@/types';
import axios from 'axios';

interface CursorPaginator {
    data: VideoType[];
    next_cursor: string | null;
    prev_cursor: string | null;
    path: string;
    per_page: number;
}

const props = defineProps<{
    videos: CursorPaginator | VideoType[]; // Handle both direct array (if simpler) or paginator
}>();

// Normalize data
const initializeData = () => {
    if (Array.isArray(props.videos)) {
        return { data: props.videos, cursor: null, path: '/api/videos' };
    }
    return {
        data: props.videos.data,
        cursor: props.videos.next_cursor,
        path: props.videos.path
    };
};

const { data: initialData, cursor: initialCursor } = initializeData();

const videoList = ref<VideoType[]>(initialData || []);
const nextCursor = ref<string | null>(initialCursor);
const loading = ref(false);
const activeVideoId = ref<number | null>(videoList.value.length > 0 ? videoList.value[0].id : null);
const loadTrigger = ref(null);

const handleVisible = (video: VideoType) => {
    activeVideoId.value = video.id;
    const newUrl = `/v/${video.slug}-${video.id}`;
    // prevent history update spam on initial load if we are already there
    // But basic check is fine
    if (window.location.pathname !== newUrl && !window.location.pathname.includes(newUrl)) { // checking includes to be safe against slight formatting
         window.history.replaceState({}, '', newUrl);
         document.title = video.title + ' | VlogPhim';
    }
};

const loadMore = async () => {
    if (loading.value || !nextCursor.value) return;
    loading.value = true;

    try {
        const response = await axios.get('/api/videos', {
            params: { cursor: nextCursor.value }
        });

        const newData = response.data;
        videoList.value.push(...newData.data);
        nextCursor.value = newData.next_cursor;
    } catch (e) {
        console.error(e);
    } finally {
        loading.value = false;
    }
}

useIntersectionObserver(
    loadTrigger,
    ([{ isIntersecting }]) => {
        if (isIntersecting) {
            loadMore();
        }
    },
    {
        rootMargin: '200px' // Load before reaching bottom
    }
);
</script>

<template>
    <div class="h-full w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar relative bg-black" id="feed-container">
        <VideoItem
            v-for="video in videoList"
            :key="video.id"
            :video="video"
            :isActive="activeVideoId === video.id"
            class="snap-start snap-always h-full w-full"
            @visible="handleVisible"
        />

        <!-- Loading Indicator / Trigger -->
        <div ref="loadTrigger" class="h-20 w-full flex justify-center items-center snap-center" v-if="nextCursor">
             <div v-if="loading" class="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
        </div>
    </div>
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
