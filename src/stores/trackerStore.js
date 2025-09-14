import { ref, computed } from 'vue'

// Base tracker data store
export const trackers = ref([
    { id: 10, width: 300 },
    { id: 11, width: 360 },
    { id: 12, width: 480 },
    { id: 13, width: 568 },
    { id: 14, width: 768 },
    { id: 15, width: 920 },
    { id: 16, width: 1024 },
    { id: 17, width: 1280 },
    { id: 18, width: 1440 }
])

// Derived tracker sorts
export const trackersAsc = computed(() => {
    const sorted = [...trackers.value].sort((a, b) => a.width - b.width)
    return sorted
})

export const trackersDesc = computed(() => {
    return [...trackersAsc.value].reverse()
})
