<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch, computed } from 'vue';
import type { Video } from '@/types';
import Hls from 'hls.js';

const props = defineProps<{
    video: Video;
    isActive: boolean;
}>();

const videoElement = ref<HTMLVideoElement | null>(null);
const hls = ref<Hls | null>(null);
const isPlaying = ref(false);

// Get best source
const source = computed(() => {
    if (!props.video.sources || props.video.sources.length === 0) return null;
    return props.video.sources[0]; // Assume sorted by priority
});

const togglePlay = () => {
    if (videoElement.value) {
        if (videoElement.value.paused) {
            videoElement.value.play();
        } else {
            videoElement.value.pause();
        }
    }
};

const onPlay = () => {
    isPlaying.value = true;
};

const onPause = () => {
    isPlaying.value = false;
};

const initPlayer = () => {
    if (!source.value) return;

    destroyPlayer();

    if (source.value.type === 'hls') {
        if (Hls.isSupported() && videoElement.value) {
            hls.value = new Hls({
                autoStartLoad: true,
                startLevel: -1,
                capLevelToPlayerSize: true
            });
            hls.value.loadSource(source.value.source_url);
            hls.value.attachMedia(videoElement.value);
            hls.value.on(Hls.Events.MANIFEST_PARSED, () => {
                if(props.isActive) videoElement.value?.play().catch(e => console.log('Autoplay prevented', e));
            });
        } else if (videoElement.value?.canPlayType('application/vnd.apple.mpegurl')) {
             videoElement.value.src = source.value.source_url;
        }
    } else if (source.value.type === 'mp4') {
        if (videoElement.value) {
            videoElement.value.src = source.value.source_url;
        }
    }
};

const destroyPlayer = () => {
    if (hls.value) {
        hls.value.destroy();
        hls.value = null;
    }
};

watch(() => props.isActive, (active) => {
    if (active) {
        if (videoElement.value) {
             // For HLS, we might need to check if attached
            videoElement.value.play().catch(() => {});
        }
    } else {
        if (videoElement.value) {
            videoElement.value.pause();
            // Optional: reset time?
        }
    }
});

onMounted(() => {
    // Lazy init? Or init immediately but pause.
    // Optimization: only init if getting close? For MVP init all is okay if logic is simple.
    // The instructions say "Video ngoài viewport pause... Không preload iframe hàng loạt".
    // For HLS/HTML5, lazy loading is better.
    // If isActive is true on mount, play.
    initPlayer();
});

onBeforeUnmount(() => {
    destroyPlayer();
});

</script>

<template>
    <div class="w-full h-full bg-black flex items-center justify-center relative cursor-pointer group" @click="togglePlay">
        <!-- HTML5 Video / HLS -->
        <video
            v-if="source?.type === 'hls' || source?.type === 'mp4'"
            ref="videoElement"
            class="w-full h-full object-cover"
            playsinline
            loop
            muted
            :poster="video.thumbnail"
            @play="onPlay"
            @pause="onPause"
        ></video>

        <!-- Youtube / Embed / Iframe -->
        <!-- Only render iframe if active or close to active to save resources? -->
        <!-- For MVP, we use v-if on source type, but src binding handles lazy play -->
        <iframe
            v-else-if="source?.type === 'youtube' || source?.type === 'embed' || source?.type === 'drive' || source?.type === 'facebook'"
            :src="isActive ? source.source_url : ''"
            class="w-full h-full border-0 pointer-events-auto"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowfullscreen
        ></iframe>

        <!-- Fallback -->
        <div v-else class="text-white text-center p-4">
            <p>Unsupported Video format: {{ source?.type }}</p>
        </div>

        <!-- Play Button Overlay -->
        <div
            v-if="isActive && !isPlaying && (source?.type === 'hls' || source?.type === 'mp4')"
            class="absolute inset-0 flex items-center justify-center bg-black/10 transition-opacity duration-200 pointer-events-none"
        >
            <div class="bg-white/20 backdrop-blur-sm rounded-full p-4 md:p-6 text-white text-opacity-90 transform scale-100 animate-pulse">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 md:w-16 md:h-16">
                    <path fill-rule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clip-rule="evenodd" />
                </svg>
            </div>
        </div>
    </div>
</template>
