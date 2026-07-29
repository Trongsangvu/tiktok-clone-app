# 🚀 TikTok Web Application (Next.js App Router)

A modern, high-performance TikTok Web Application clone built with **Next.js 14 (App Router)**, **SCSS Modules**, and **Yarn 4**.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router) & React 18
- **Styling**: SCSS Modules & Classnames
- **Icons & Tooltips**: FontAwesome & Tippy.js (`@tippyjs/react/headless`)
- **HTTP Client**: Axios
- **Package Manager**: Yarn 4 (Berry) with `nodeLinker: node-modules`
- **Path Alias**: `~/*` mapping to `./src/*`

---

## 📦 Requirements

- **Node.js**: `>= 18.0.0`
- **Yarn**: `>= 4.0.0`

---

## ⚙️ Quick Start

### 1. Install Dependencies

```bash
yarn install
```

### 2. Environment Configuration

Create a `.env.local` file:

```env
NEXT_PUBLIC_BASE_URL=https://your-api.com/api/
```

### 3. Run Development Server

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Build & Production

To build the application for production:

```bash
yarn build
```

To start the production server:

```bash
yarn start
```

---

## ✨ Features

- 📱 **Responsive TikTok Layout**: Fixed header, sidebar navigation, and main content feed layout.
- 🔍 **Live Search Autocomplete**: Debounced real-time search with Tippy.js popover dropdown.
- 🎨 **Dynamic Tippy Popovers**: Multi-level user menus (language selection, profile settings, keyboard shortcuts).
- 👤 **Dynamic Profile Routing**: Supports `/@nickname` user profile links via Next.js dynamic routing and rewrites.
- ⚡ **Optimized Next.js Bundles**: Fast page loading with client component separation (`"use client"`).
