<template>
    <div id="app">
        <Header />
        <router-view id="main-content" />
        <Footer />
    </div>
</template>

<script setup>
    import Footer from './components/common/Footer.vue'
    import Header from './components/common/Header.vue'
</script>

<style>
    /* App-wide styles if needed */
</style>
