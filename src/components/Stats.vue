<template>
    <aside class="stats">
        <template v-if="fluidSize >= 0">
            Min value <strong class="stats__value--min">({{ minValue }}px)</strong> ends at
            <strong class="stats__value--min">{{ start }} px</strong>. Max value
            <strong class="stats__value--max">({{ maxValue }}px)</strong>
            starts at
            <strong class="stats__value--max">{{ end }} px</strong>.
        </template>
        <template v-else>
            Max value <strong class="stats__value--min">({{ maxValue }}px)</strong> ends at
            <strong class="stats__value--min">{{ end }} px</strong>. Min value
            <strong class="stats__value--max">({{ minValue }}px)</strong>
            starts at
            <strong class="stats__value--max">{{ start }} px</strong>.
        </template>
    </aside>
</template>

<script setup>
    import { fluidSize } from '../stores/fluidTypographyStore.js'

    defineProps({
        start: {
            type: Number,
            default: 0
        },
        minValue: {
            type: Number,
            default: 0
        },
        end: {
            type: Number,
            default: 0
        },
        maxValue: {
            type: Number,
            default: 0
        }
    })
</script>

<style scoped>
    .stats {
        font-family: var(--font-family-primary);
        text-align: left;
    }

    .stats__value--min {
        color: var(--color-secondary);
    }

    .stats__value--max {
        color: var(--color-primary);
    }
</style>
