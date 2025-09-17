import { computed } from 'vue'
import { fluidSize, maxSize, minSize, relativeSizePx } from './fluidTypographyStore.js'
import { clampRange } from '../utils/clampRange.js'

/**
 * Computes the starting point for a graph change based on size constraints.
 * If the minimum size is greater than or equal to the maximum size, returns a default starting point.
 * Otherwise, calculates the x-coordinate relative to the fluid size and the y-coordinate as the minimum size.
 *
 * @returns {{x: number, y: number}} The starting coordinates for the graph change.
 */
export const graphChangeStart = computed(() => {
    if (minSize.value >= maxSize.value) {
        return { x: 0, y: minSize.value }
    }
    return {
        x: Math.round((100 * (minSize.value - relativeSizePx.value)) / fluidSize.value),
        y: minSize.value
    }
})

/**
 * Computes the end point of a graph change based on size values.
 *
 * If the minimum size is greater than or equal to the maximum size,
 * returns a fixed x value and the minimum size as y.
 * Otherwise, calculates x as a percentage of the difference between
 * max size and relative size in pixels, divided by fluid size, and
 * y as the maximum size.
 *
 * @returns {{x: number, y: number}} The computed end point coordinates.
 */
export const graphChangeEnd = computed(() => {
    if (minSize.value >= maxSize.value) {
        return { x: 1900, y: minSize.value }
    }
    return {
        x: Math.round((100 * (maxSize.value - relativeSizePx.value)) / fluidSize.value),
        y: maxSize.value
    }
})

/**
 * Computes the starting position for the graph based on size constraints and fluid calculations.
 *
 * - If `minSize` is greater than or equal to `maxSize`, returns a fixed position.
 * - Otherwise, calculates `x` based on `graphChangeStart` and clamps `y` within the allowed range.
 *
 * @returns {{ x: number, y: number }} The computed starting coordinates for the graph.
 */
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

/**
 * Computes the end coordinates for the graph based on various reactive values.
 *
 * - If `minSize` is greater than or equal to `maxSize`, returns a fixed x value (1400) and y as `minSize`.
 * - Otherwise, calculates x as the maximum of `graphChangeEnd.x + 100` and 1400.
 * - Calculates y by scaling `fluidSize` with x, adding `relativeSizePx`, and clamping the result between `minSize` and `maxSize`.
 *
 * @returns {{ x: number, y: number }} The computed end coordinates for the graph.
 */
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

/**
 * Computes and returns an array of graph points sorted by their x-coordinate.
 * The array includes: graphStart, graphChangeStart, graphChangeEnd, and graphEnd.
 *
 * @returns {Array<{x: number, y: number}>} Sorted array of graph point objects.
 */
export const graphPoints = computed(() => {
    return [graphStart.value, graphChangeStart.value, graphChangeEnd.value, graphEnd.value].sort(
        (a, b) => a.x - b.x
    )
})
