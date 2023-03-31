<template>
    <div class="bg-black text-white">
        <div class="max-w-screen-2xl mx-auto p-10">
            <NavBar></NavBar>
            <slot></slot>
            <Footer></Footer>
        </div>
    </div>
</template>

<script setup>
useHead({
    htmlAttrs: {
        lang: 'en',
    },
    link:[
        { rel: 'apple-touch-icon', sizes: "180x180", href: '/apple-touch-icon.png' },
        { rel: 'icon', type: "image/png", sizes: "32x32", href: '/favicon-32x32.png' },
        { rel: 'icon', type: "image/png", sizes: "16x16", href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#EF6103' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
    ]
});
</script>