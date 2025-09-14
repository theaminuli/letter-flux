<template>
    <LineChart :data="graphPoints" :chart-options="CHART_OPTIONS" />
</template>

<script setup>
    import LineChart from './LineChart.vue'
    import { graphPoints } from '../stores/graphStore.js'
    import { CHART_OPTIONS } from '../utils/chartConfig.js'
</script>
