<template>
    <figure>
        <canvas ref="canvasRef" />
    </figure>
</template>

<script setup>
    import { ref, onMounted, watch } from 'vue'
    import { Chart, registerables, Interaction } from 'chart.js'
    import { CrosshairPlugin, Interpolate } from 'chartjs-plugin-crosshair'

    const props = defineProps({
        chartOptions: {
            type: Object,
            required: true
        },
        data: {
            type: Array,
            required: true
        }
    })

    const canvasRef = ref(null)
    let chart = null

    const initChart = () => {
        if (!canvasRef.value) return

        Interaction.modes.interpolate = Interpolate
        Chart.register(CrosshairPlugin, ...registerables)

        chart = new Chart(canvasRef.value.getContext('2d'), props.chartOptions)

        const gradientFill = chart.ctx.createLinearGradient(0, 0, 0, chart.chartArea.height)
        gradientFill.addColorStop(0, 'hsla(182, 29%, 51%, 0.17)')
        gradientFill.addColorStop(1, 'hsla(182, 29%, 51%, 0)')
        chart.options.backgroundColor = gradientFill

        chart.data.datasets[0].data = props.data
        chart.update()
    }

    watch(
        () => props.data,
        (newData) => {
            if (chart) {
                chart.data.datasets[0].data = newData
                chart.update()
            }
        },
        { deep: true }
    )

    onMounted(initChart)
</script>

<style lang="scss" scoped>
    @use '../assets/styles/media.scss' as media;

    figure {
        width: 100%;
    }

    canvas {
        margin-top: calc(var(--spacing-1) + var(--spacing-n2));
        cursor: crosshair;
        width: 100%;
        max-width: 100%;

        @include media.mq-desktop-min {
            margin-left: calc(-1 * var(--spacing-2));
            max-width: calc(100% + var(--spacing-2));
        }
    }
</style>
