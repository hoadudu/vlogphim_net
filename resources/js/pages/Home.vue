<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
import VideoFeed from '@/components/VideoFeed.vue';
import { Head } from '@inertiajs/vue3';

defineProps(['videos']);
</script>

<template>
    <Head title="Trending" />
    <MainLayout>
        <VideoFeed :videos="videos" />
    </MainLayout>
</template>
