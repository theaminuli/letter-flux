import { computed } from 'vue'
import { fluidSize, maxSize, minSize, relativeSizePx } from './fluidTypographyStore.js'
import { clampRange } from '../utils/clampRange.js'

// Graph calculation derived values
export const graphChangeStart = computed(() => {
    if (minSize.value >= maxSize.value) {
        return { x: 0, y: minSize.value }
    }
    return {
        x: Math.round((100 * (minSize.value - relativeSizePx.value)) / fluidSize.value),
        y: minSize.value
    }
})

export const graphChangeEnd = computed(() => {
    if (minSize.value >= maxSize.value) {
        return { x: 1900, y: minSize.value }
    }
    return {
        x: Math.round((100 * (maxSize.value - relativeSizePx.value)) / fluidSize.value),
        y: maxSize.value
    }
})

export const graphStart = computed(() => {
    if (minSize.value >= maxSize.value) {
        return { x: 100, y: minSize.value }
    }

    const x = Math.min(graphChangeStart.value.x - 100, 100)

    return {
        x,
        y: clampRange(
            (fluidSize.value / 100) * x + relativeSizePx.value,
            minSize.value,
            maxSize.value
        )
    }
})

export const graphEnd = computed(() => {
    if (minSize.value >= maxSize.value) {
        return { x: 1400, y: minSize.value }
    }

    const x = Math.max(graphChangeEnd.value.x + 100, 1400)

    return {
        x,
        y: clampRange(
            (fluidSize.value / 100) * x + relativeSizePx.value,
            minSize.value,
            maxSize.value
        )
    }
})

export const graphPoints = computed(() => {
    return [graphStart.value, graphChangeStart.value, graphChangeEnd.value, graphEnd.value].sort(
        (a, b) => a.x - b.x
    )
})
