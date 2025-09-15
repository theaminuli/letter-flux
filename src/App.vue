<template>
    <div id="app">
        <!-- Font Awesome CSS -->
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
            crossorigin="anonymous"
            referrerpolicy="no-referrer"
        />

        <Header />
        <router-view />
        <Footer />
    </div>
</template>

<script setup>
    import Footer from './components/Footer.vue'
    import Header from './components/Header.vue'
</script>

<style>
    /* App-wide styles if needed */
</style>
