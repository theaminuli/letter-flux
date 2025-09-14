<template>
    <article class="tabs-wrapper">
        <div class="tabs-wrapper__utils">
            <slot name="snippet" />
            <slot name="share" />
        </div>

        <nav class="tabs">
            <button
                v-for="(label, index) in tabs"
                :key="index"
                :class="['tab__button', { 'tab__button--active': index === activeTab }]"
                @click="activeTab = index"
            >
                {{ label }}
            </button>
        </nav>
    </article>

    <slot :activeTab="activeTab" />
</template>

<script setup>
    import { ref } from 'vue'

    defineProps({
        tabs: {
            type: Array,
            required: true
        }
    })

    const activeTab = ref(0)
</script>

<style lang="scss" scoped>
    @use '../assets/styles/media.scss' as media;

    .tabs-wrapper {
        align-items: flex-end;
        justify-content: space-between;
        margin-bottom: var(--spacing-1);
        isolation: isolate;

        @include media.mq-desktopLarge-min {
            display: flex;
        }
    }

    .tabs-wrapper__utils {
        grid-gap: var(--spacing-1);
        margin-bottom: var(--spacing-1);
        display: grid;

        @include media.mq-tablet-min {
            grid-template-columns: 1fr 1fr;
        }

        @include media.mq-desktopLarge-min {
            margin-bottom: 0;
            grid-template-columns: auto auto;
        }
    }

    .tabs {
        display: flex;
        margin-top: var(--spacing-1);

        @include media.mq-desktop-min {
            margin-top: 0;
        }
    }

    .tab__button {
        background: transparent;
        border-width: 0;
        padding: var(--spacing-n1) var(--spacing-1);
        color: var(--color-gray-light);
        font-family: var(--font-family-primary);
        cursor: pointer;
        background-color: var(--color-gray-medium-faded);
        text-align: center;
        display: block;
        border: 2px solid currentColor;
        border-radius: var(--spacing-n1) 0 0 var(--spacing-n1);
        flex-grow: 1;

        @include media.mq-mobileLandscape-min {
            flex-grow: initial;
            min-width: calc(2 * var(--spacing-4));
            padding: var(--spacing-n1) var(--spacing-1);
        }
    }

    .tab__button + .tab__button {
        border-radius: 0 var(--spacing-n1) var(--spacing-n1) 0;
        margin-left: -2px;
    }

    .tab__button--active {
        color: var(--color-secondary);
        background-color: var(--color-secondary-faded);
        position: relative;
        z-index: 2;
    }
</style>
