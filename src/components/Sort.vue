<template>
    <button
        :class="['sort', { 'sort--desc': !isAsc }, { 'sort--asc': isAsc }]"
        @click="handleClick"
    >
        <i v-if="isAsc" class="fa-solid fa-arrow-up" />
        <i v-else class="fa-solid fa-arrow-down" />
    </button>
</template>

<script setup>
    defineProps({
        handleClick: {
            type: Function,
            required: true
        },
        isAsc: {
            type: Boolean,
            required: true
        }
    })
</script>

<style scoped>
    .sort {
        margin-left: calc(-1 * var(--spacing-n5));
        border: 2px solid currentColor;
        background-color: transparent;
        border-radius: var(--spacing-n4);
        padding: var(--spacing-n4) var(--spacing-n3);
        margin-right: var(--spacing-n4);
    }

    .sort--asc {
        color: var(--color-secondary);
    }

    .sort--desc {
        color: var(--color-primary);
    }
</style>
