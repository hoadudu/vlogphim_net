import { InertiaLinkProps } from '@inertiajs/vue3';
import type { LucideIcon } from 'lucide-vue-next';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavItem {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon;
    isActive?: boolean;
}

export type AppPageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    sidebarOpen: boolean;
};

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
}

export type BreadcrumbItemType = BreadcrumbItem;

export interface VideoSource {
    id: number;
    video_id: number;
    type: 'hls' | 'mp4' | 'youtube' | 'facebook' | 'drive' | 'embed';
    source_url: string;
    priority: number;
    status: number;
}

export interface Hashtag {
    id: number;
    name: string;
    slug: string;
}

export interface Video {
    id: number;
    title: string;
    slug: string;
    description?: string;
    thumb_url?: string;
    thumbnail?: string;
    duration?: string;
    views: number;
    likes: number;
    shares: number;
    is_liked?: boolean;
    status: number;
    created_at: string;
    sources?: VideoSource[];
    hashtags?: Hashtag[];
}
