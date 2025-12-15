<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import VideoFeed from '@/components/VideoFeed.vue';
import { Head } from '@inertiajs/vue3';
import type { Video as VideoType } from '@/types';

const props = defineProps<{
    video: VideoType;
    videos: any;
}>();

// Merge the main video with the rest of the feed
const combinedVideos = {
    ...props.videos,
    data: [props.video, ...props.videos.data]
};
</script>

<template>
    <Head :title="props.video.title" />
    <MainLayout>
        <VideoFeed :videos="combinedVideos" />
    </MainLayout>
</template>
