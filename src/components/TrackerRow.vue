<template>
    <tr
        :class="[
            'data',
            { 'data--asc': isAsc },
            { 'data--desc': !isAsc },
            { 'data--max': sizeValue === maxSize },
            { 'data--min': sizeValue === minSize }
        ]"
    >
        <td>{{ width }} px</td>
        <td>{{ sizeValue }} px</td>
        <td>{{ setToPrecision(sizeValue / rootFontSize, 3) }}rem</td>
        <td>
            <button
                :class="[
                    'data__button',
                    { 'data__button--max': sizeValue === maxSize },
                    { 'data__button--min': sizeValue === minSize }
                ]"
                @click="handleRemove"
                :data-id="id"
            >
                <i class="fa-solid fa-trash-can" />
            </button>
        </td>
    </tr>
</template>

<script setup>
    import { computed } from 'vue'
    import { setToPrecision } from '../utils/setToPrecision.js'
    import {
        fluidSize,
        maxSize,
        minSize,
        relativeSizePx,
        rootFontSize
    } from '../stores/fluidTypographyStore.js'
    import { trackers } from '../stores/trackerStore.js'
    import { calculateSizeValue } from '../utils/trackerUtils.js'

    const props = defineProps({
        width: {
            type: Number,
            required: true
        },
        id: {
            type: Number,
            required: true
        },
        isAsc: {
            type: Boolean,
            default: false
        }
    })

    const sizeValue = computed(() =>
        calculateSizeValue(
            props.width,
            fluidSize.value,
            relativeSizePx.value,
            minSize.value,
            maxSize.value
        )
    )

    const handleRemove = (e) => {
        const id = parseInt(e.currentTarget.dataset.id)

        if (!id || isNaN(id)) {
            return
        }

        trackers.value = trackers.value.filter((item) => item.id !== id)
    }
</script>

<style scoped>
    .data {
        padding: var(--spacing-n2) var(--spacing-1);
        background-color: var(--color-gray-medium-faded);
    }

    .data--max {
        background-color: var(--color-primary-faded);
    }

    .data--min {
        background-color: var(--color-secondary-faded);
    }

    .data__button {
        color: var(--color-gray-light);
        background: transparent;
        border-width: 0;
        cursor: pointer;
    }

    .data__button:hover,
    .data__button:active {
        color: var(--color-gray-lightest);
    }

    .data__button--min {
        color: var(--color-secondary-tint);
    }

    .data__button--min:hover,
    .data__button--min:active {
        color: var(--color-secondary);
    }

    .data__button--max {
        color: var(--color-primary-tint);
    }

    .data__button--max:hover,
    .data__button--max:active {
        color: var(--color-primary);
    }

    /* Global styles for row borders */
    :global(.data--asc.data:not(.data--min):not(.data--max)) + .data--max {
        border-top: 3px solid var(--color-primary-tint);
    }

    :global(.data--asc.data:not(.data--min):not(.data--max)) + .data--min {
        border-top: 3px solid var(--color-secondary-tint);
    }

    :global(.data--desc.data:not(.data--max):not(.data--min)) + .data--min {
        border-top: 3px solid var(--color-secondary-tint);
    }

    :global(.data--desc.data:not(.data--max):not(.data--min)) + .data--max {
        border-top: 3px solid var(--color-primary-tint);
    }

    :global(.data--asc.data--min) + :global(.data:not(.data--min)) {
        border-top: 3px solid var(--color-secondary-tint);
    }

    :global(.data--desc.data--max) + :global(.data:not(.data--max)) {
        border-top: 3px solid var(--color-primary-tint);
    }

    :global(.data--desc.data--min) + :global(.data:not(.data--min)) {
        border-top: 3px solid var(--color-secondary-tint);
    }

    :global(.data--asc.data--max) + :global(.data:not(.data--max)) {
        border-top: 3px solid var(--color-primary-tint);
    }
</style>
