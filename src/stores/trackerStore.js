import { ref, computed } from 'vue'


/**
 * Reactive array of tracker objects, each representing a screen width breakpoint.
 * @type {import('vue').Ref<Array<{ id: number, width: number }>>}
 * @example
 * trackers.value // [{ id: 10, width: 300 }, ...]
 */
export const trackers = ref([
    { id: 10, width: 300 },
    { id: 11, width: 360 },
    { id: 12, width: 480 },
    { id: 13, width: 568 },
    { id: 14, width: 768 },
    { id: 15, width: 920 },
    { id: 16, width: 1024 },
    { id: 17, width: 1280 },
])

/**
 * A computed property that returns a new array of tracker objects sorted in ascending order by their width.
 *
 * @returns {Array<Object>} Sorted array of tracker objects by width.
 */
export const trackersAsc = computed(() => {
    const sorted = [...trackers.value].sort((a, b) => a.width - b.width)
    return sorted
})

/**
 * A computed ref that returns the reversed order of `trackersAsc` array.
 * 
 * @returns {Array} The array of trackers in descending order.
 */
export const trackersDesc = computed(() => {
    return [...trackersAsc.value].reverse()
})
