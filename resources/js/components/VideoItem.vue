<script setup lang="ts">
import { ref, watch } from 'vue';
import { useIntersectionObserver } from '@vueuse/core';
import VideoPlayer from '@/components/VideoPlayer.vue';
import type { Video } from '@/types';
import axios from 'axios';
import { Link } from '@inertiajs/vue3';

const props = defineProps<{
    video: Video;
    isActive: boolean;
}>();

const emit = defineEmits(['visible']);

const container = ref(null);
const isLiked = ref(props.video.is_liked || false);
const likesCount = ref(props.video.likes || 0);
const viewsCount = ref(props.video.views || 0);
const hasViewed = ref(false);

const handleView = () => {
    if (!hasViewed.value) {
        hasViewed.value = true;
        viewsCount.value++;
        // Simple View Counting after 2s of playback/active
        setTimeout(() => {
            axios.post(`/api/videos/${props.video.id}/view`);
        }, 2000);
    }
};

const toggleLike = async () => {
    const previousState = isLiked.value;
    isLiked.value = !isLiked.value;
    likesCount.value += isLiked.value ? 1 : -1;

    try {
        const response = await axios.post(`/api/videos/${props.video.id}/like`);
        likesCount.value = response.data.likes_count;
    } catch (error) {
        isLiked.value = previousState;
        likesCount.value += isLiked.value ? 1 : -1;
        console.error('Like failed', error);
    }
};

watch(() => props.isActive, (active) => {
    if (active) {
        handleView();
    }
});


useIntersectionObserver(
  container,
  ([{ isIntersecting, intersectionRatio }]) => {
    // Detect when this item covers significant portion of screen
    if (isIntersecting && intersectionRatio > 0.5) {
        emit('visible', props.video);
    }
  },
  { threshold: [0.5, 0.6] }
);

</script>

<template>
    <div ref="container" class="relative h-[100dvh] w-full bg-black flex items-center justify-center overflow-hidden">
        <!-- Video Player Layer -->
        <div class="absolute inset-0 z-0 h-full w-full">
             <VideoPlayer :video="video" :isActive="isActive" />
        </div>

        <!-- Overlay Layer (Gradient) -->
        <div class="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80 pointer-events-none z-10"></div>

        <!-- Metadata -->
        <div class="absolute bottom-0 left-0 right-0 p-4 pb-20 z-20 md:pb-8 pointer-events-none">
            <h2 class="text-xl font-bold text-white mb-1 drop-shadow-md line-clamp-2 md:text-2xl">{{ video.title }}</h2>
            <div class="flex items-center space-x-3 text-sm text-gray-200 mb-2">
                <div class="bg-white/10 px-2 py-0.5 rounded backdrop-blur-sm flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3 h-3">
                        <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                        <path fill-rule="evenodd" d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" clip-rule="evenodd" />
                    </svg>
                    <span>{{ viewsCount.toLocaleString() }}</span>
                </div>
                <span class="text-gray-400 text-xs">{{ new Date(video.created_at).toLocaleDateString() }}</span>
            </div>
            <p v-if="video.description" class="text-sm text-gray-300 line-clamp-2 opacity-90 drop-shadow-sm font-light leading-relaxed mb-2">{{ video.description }}</p>

            <div v-if="video.hashtags && video.hashtags.length > 0" class="flex flex-wrap gap-2 pointer-events-auto">
                <Link
                    v-for="tag in video.hashtags"
                    :key="tag.id"
                    :href="`/hashtag/${tag.slug}`"
                    class="text-xs font-medium text-white bg-white/20 hover:bg-white/30 px-2 py-0.5 rounded-full backdrop-blur-md transition-colors"
                >
                    #{{ tag.name }}
                </Link>
            </div>
        </div>

        <!-- Interactive Actions Actions (Like Only) -->
        <div class="absolute right-2 bottom-24 z-30 flex flex-col gap-6 items-center md:bottom-12 md:right-4">
             <button :id="`like-btn-${video.id}`" @click="toggleLike" class="flex flex-col items-center gap-1 group">
                 <div class="p-3 bg-black/40 backdrop-blur-md rounded-full group-hover:bg-black/60 transition" :class="{'text-red-500': isLiked, 'text-white': !isLiked}">
                     <svg xmlns="http://www.w3.org/2000/svg" :fill="isLiked ? 'currentColor' : 'none'" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                     </svg>
                 </div>
                 <span class="text-xs font-semibold text-white drop-shadow">{{ likesCount }}</span>
             </button>
        </div>

    </div>
</template>
