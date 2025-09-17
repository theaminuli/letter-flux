<template>
    <div :class="['tracker-wrapper', { 'tracker-wrapper--overflow': items.length > 9 }]">
        <table class="tracker">
            <thead>
                <tr>
                    <th>
                        <Sort :is-asc="isAsc" :handle-click="handleClick" />
                        Screen width
                    </th>
                    <th colspan="2">Fluid size value</th>
                    <th />
                </tr>
            </thead>
            <tbody>
                <TrackerRow
                    v-for="item in items"
                    :key="`${isAsc ? 'asc' : 'desc'}-${item.id}`"
                    :is-asc="isAsc"
                    :width="item.width"
                    :id="item.id"
                />
            </tbody>
        </table>
    </div>
</template>

<script setup>
    import { computed, ref } from 'vue'
    import { trackersAsc, trackersDesc } from '../stores/trackerStore.js'
    import Sort from './Sort.vue'
    import TrackerRow from './TrackerRow.vue'

    const isAsc = ref(true)

    const items = computed(() => (isAsc.value ? trackersAsc.value : trackersDesc.value))

    const handleClick = () => {
        isAsc.value = !isAsc.value
    }
</script>

<style scoped>
    .tracker-wrapper {
        border-radius: var(--spacing-n5);
        overflow: auto;
    }

    .tracker-wrapper--overflow {
        max-height: 447px;
    }

    .tracker {
        border-collapse: collapse;
        font-weight: 700;
        width: 100%;
        min-width: calc((510 / 16) * 1rem);
    }

    .tracker thead {
        position: sticky;
        top: 0;
        background-color: var(--color-gray-dark);
        z-index: -1;
    }

    .tracker thead tr {
        box-shadow: inset 0 0 0 2px var(--color-gray-medium);
    }

    .tracker :deep(th) {
        text-align: left;
        font-family: var(--font-family-primary);
    }

    .tracker :deep(th),
    .tracker :deep(td) {
        line-height: 1;
        padding: var(--spacing-n1) var(--spacing-1);
    }
</style>
