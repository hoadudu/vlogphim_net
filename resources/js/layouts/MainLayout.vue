<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <div
        class="min-h-screen overflow-hidden bg-black font-sans text-white antialiased"
    >
        <!-- Header / Nav (Minimal) -->
        <nav
            class="pointer-events-none fixed top-0 right-0 left-0 z-50 flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent px-4 py-3"
        >
            <div class="pointer-events-auto">
                <Link
                    href="/"
                    class="text-xl font-bold tracking-tighter text-white drop-shadow-md"
                >
                    Vlog<span class="text-red-500">Phim</span>
                </Link>
            </div>
            <div class="pointer-events-auto">
                <Link
                    href="/search"
                    class="flex items-center justify-center rounded-full bg-white/10 p-2 backdrop-blur-md transition hover:bg-white/20"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="h-5 w-5"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                    </svg>
                </Link>
            </div>
        </nav>

        <main class="flex h-[100dvh] w-full justify-center bg-[#000]">
            <!-- Desktop Container: Constrain width to mobile-like ratio -->
            <div
                class="relative h-full w-full overflow-hidden bg-black md:max-w-[420px] md:shadow-2xl md:shadow-black"
            >
                <slot />
            </div>
        </main>
    </div>
</template>
