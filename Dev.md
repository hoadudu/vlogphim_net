**Dự án: Web video dọc 9:16 – SEO-first – MVP**

---

## 1. Mục tiêu tổng thể

Xây dựng một **web video dọc 9:16** tối giản, tối ưu **mobile-first**, khi vào trang là **xem ngay video**, scroll xuống là video tiếp theo.
Dự án **SEO-first**, mỗi video có URL riêng để index Google.

👉 Đây là **MVP**, ưu tiên:

- Ít chức năng
- Code gọn
- Dễ mở rộng

---

## 2. Tech stack (CHỐT – không thay đổi)

- Backend: **Laravel 12**
- Frontend: **Vue 3 + Inertia**
- DB: MySQL
- Video storage: external (CDN / S3 / Google Drive / embed)
- ❌ Không dùng Nuxt / SSR Node
- ❌ Không login / auth

---

## 3. Chức năng MVP (CHỈ 3 CÁI)

### ✅ BẮT BUỘC

1. **Home (Feed video)**
2. **Trang video riêng (URL SEO)**
3. **Tìm kiếm đơn giản**

### ❌ TUYỆT ĐỐI KHÔNG LÀM Ở MVP

- Login / User
- Like / Comment / Follow
- Recommendation AI
- Dashboard creator

---

## 4. UX & Hành vi chính

### Home (`/`)

- Vào trang là thấy **1 video chiếm full màn hình mobile**
- Video autoplay (muted)
- Scroll xuống là video tiếp theo (video cũ hơn)
- Infinite scroll (cursor-based)

### Trang video (`/v/{slug}-{id}`)

- Video đó là **video đầu tiên**
- Scroll xuống vẫn là feed video
- Đây là **entry point SEO chính**

---

## 5. SEO – NGUYÊN TẮC BẮT BUỘC

- **Mỗi video có URL thật**:

    ```
    /v/{slug}-{id}
    ```

- Trang video phải render HTML từ server (Inertia)
- Có:
    - `<title>`
    - meta description
    - OG tags
    - Schema `VideoObject`

- **KHÔNG redirect khi scroll**
- Khi scroll đổi video → **chỉ update URL bằng History API**

    ```js
    history.replaceState(null, '', video.url);
    ```

---

## 6. Kiến trúc VIDEO 3 TẦNG (BẮT BUỘC LÀM ĐÚNG)

### 🧱 Tổng quan

```
[Tầng 1] Video Source (nhiều nguồn / backup)
[Tầng 2] Video Entity (SEO + info)
[Tầng 3] Player (embed / render)
```

---

### 🟦 TẦNG 1 – VIDEO SOURCE

👉 Chỉ lưu **link & metadata**, không SEO, không render

**Table: `video_sources`**

```sql
id
video_id
type ENUM(
  'hls',
  'mp4',
  'youtube',
  'facebook',
  'drive',
  'embed'
)
source_url TEXT
priority INT   -- số nhỏ ưu tiên cao
status TINYINT -- active / inactive
created_at
```

- Một video có **nhiều source**
- Có thể fallback nếu source chính lỗi

---

### 🟩 TẦNG 2 – VIDEO ENTITY (SEO CORE)

👉 **Tầng quan trọng nhất**

**Table: `videos`**

```sql
id
title
slug
description
thumb_url
duration
views
status
created_at
```

Trách nhiệm:

- SEO
- URL
- Title / description
- Schema VideoObject

❗ **Không phụ thuộc vào nguồn video**

---

### 🟥 TẦNG 3 – PLAYER

👉 Quyết định cách phát video

Mapping:

| source.type | player         |
| ----------- | -------------- |
| youtube     | iframe YouTube |
| facebook    | FB embed       |
| hls         | hls.js         |
| mp4         | HTML5 video    |
| drive       | iframe / proxy |
| embed       | iframe         |

- Player chỉ load khi video **đang active**
- Có fallback source nếu fail

---

## 7. Routing (Laravel)

```php
GET /              -> HomeController@index
GET /v/{slug}-{id} -> VideoController@show
GET /search        -> SearchController@index

GET /api/videos    -> load thêm video (cursor)
```

---

## 8. Frontend (Vue + Inertia)

### Pages

- `Home.vue`
- `Video.vue`
- `Search.vue`

### Components

- `VideoFeed.vue`
- `VideoItem.vue`
- `VideoPlayer.vue`

### Kỹ thuật bắt buộc

- `IntersectionObserver`
- Chỉ video trong viewport mới play
- Video ngoài viewport pause
- Không preload iframe hàng loạt
- Giới hạn DOM video (~10–15)

---

## 9. Tìm kiếm (Search)

- Search theo `title` (LIKE)
- UI đơn giản
- Click kết quả → vào `/v/...`
- Có thể `noindex` giai đoạn đầu

---

## 10. Responsive / Layout

- Mobile: video full màn hình
- Desktop:
    - Video vẫn **dọc 9:16**
    - Center
    - Hai bên trống hoặc info

- ❌ Không xoay ngang video trên PC

---

## 11. Performance & Mobile

- Autoplay muted (iOS compatible)
- Lazy load video
- Preload trước 1 video
- Không load source khi chưa cần

---

## 12. Nguyên tắc triển khai

- Code rõ ràng, tách layer
- Không hard-code player logic vào backend
- Chuẩn bị sẵn để mở rộng sau này:
    - thêm source
    - đổi player
    - thêm analytics

---

## 13. Kết quả mong muốn

- Web mở nhanh
- Xem video “đã tay” trên mobile
- Mỗi video share link riêng
- Google index được video
- Code gọn – dễ scale

---

### ❗ Lưu ý cuối

> **Ưu tiên đúng kiến trúc và UX hơn là nhiều tính năng.
> Làm đúng MVP trước, mọi thứ khác để sau.**
