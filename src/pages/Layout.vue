<template>
    <Header />
    <router-view />
    <Footer />
</template>

<script setup>
    import Footer from '../components/Footer.vue'
    import Header from '../components/Header.vue'
</script>

<style>
    /* Global styles are imported in main.js */
</style>
