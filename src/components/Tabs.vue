<template>
    <article class="tabs-wrapper">
        <div class="tabs-wrapper__utils">
            <slot name="snippet" />
            <slot name="share" />
        </div>

        <nav class="tabs" role="tablist" aria-label="Typography visualization options">
            <button
                v-for="(label, index) in tabs"
                :key="index"
                :class="['tab__button', { 'tab__button--active': index === activeTab }]"
                :aria-selected="index === activeTab"
                :aria-controls="`tabpanel-${index}`"
                :id="`tab-${index}`"
                role="tab"
                @click="activeTab = index"
                @keydown="handleKeydown"
            >
                {{ label }}
            </button>
        </nav>
    </article>

    <slot :activeTab="activeTab" />
</template>

<script setup>
    import { ref } from 'vue'

    const props = defineProps({
        tabs: {
            type: Array,
            required: true
        }
    })

    const activeTab = ref(0)

    const handleKeydown = (event) => {
        const { key } = event
        const tabCount = props.tabs.length

        switch (key) {
            case 'ArrowLeft':
            case 'ArrowUp':
                event.preventDefault()
                activeTab.value = activeTab.value > 0 ? activeTab.value - 1 : tabCount - 1
                break
            case 'ArrowRight':
            case 'ArrowDown':
                event.preventDefault()
                activeTab.value = activeTab.value < tabCount - 1 ? activeTab.value + 1 : 0
                break
            case 'Home':
                event.preventDefault()
                activeTab.value = 0
                break
            case 'End':
                event.preventDefault()
                activeTab.value = tabCount - 1
                break
        }
    }
</script>

<style lang="scss" scoped>
    @use '../assets/styles/media.scss' as media;

    .tabs-wrapper {
        align-items: flex-end;
        justify-content: space-between;
        margin-bottom: var(--spacing-1);
        isolation: isolate;
        align-items: center;

        @include media.mq-desktopLarge-min {
            display: flex;
        }
    }

    .tabs-wrapper__utils {
        gap: 10px;
        margin-bottom: var(--spacing-1);
        display: flex;
        flex-direction: column;
        align-items: stretch;

        @include media.mq-tablet-min {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
        }

        @include media.mq-desktopLarge-min {
            margin-bottom: 0;
            justify-content: flex-end;
            flex-shrink: 0;
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

    /* Enhanced focus styles for accessibility */
    .tab__button:focus-visible {
        outline: 2px solid var(--color-secondary);
        outline-offset: -2px;
        z-index: 3;
    }

    /* High contrast mode support */
    @media (prefers-contrast: high) {
        .tab__button {
            border-width: 3px;
        }

        .tab__button:focus-visible {
            outline-width: 3px;
        }
    }

    /* Reduced motion support */
    @media (prefers-reduced-motion: reduce) {
        .tab__button {
            transition: none;
        }
    }
</style>
