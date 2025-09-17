<template>
    <div class="tooltip" v-click-outside="handleClickOutside">
        <button
            ref="buttonRef"
            @mouseenter="showTooltip = true"
            @mouseleave="showTooltip = false"
            @click="showTooltip = true"
            @keydown.escape="showTooltip = false"
            class="tooltip-button"
            :aria-describedby="showTooltip ? id + '-message' : null"
            :aria-expanded="showTooltip"
            aria-label="Show validation message"
        >
            <i
                :class="`fa-solid fa-triangle-exclamation tooltip__icon tooltip__icon--${type}`"
                aria-hidden="true"
            />
        </button>
        <div
            ref="tooltipRef"
            :class="['tooltip__message', { 'tooltip__message--visible': showTooltip }]"
            :id="id + '-message'"
            role="tooltip"
            :aria-live="type === 'error' ? 'assertive' : 'polite'"
        >
            <div class="tooltip__message-inner">
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup>
    import { computePosition } from '@floating-ui/dom'
    import { onMounted, ref } from 'vue'
    import { clickOutside } from '../utils/clickOutside.js'

    const vClickOutside = clickOutside

    defineProps({
        type: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        }
    })

    const buttonRef = ref(null)
    const tooltipRef = ref(null)
    const showTooltip = ref(false)

    onMounted(() => {
        if (buttonRef.value && tooltipRef.value) {
            computePosition(buttonRef.value, tooltipRef.value, { placement: 'right' }).then(
                ({ x, y }) => {
                    Object.assign(tooltipRef.value.style, {
                        left: `${x}px`,
                        top: `${y}px`
                    })
                }
            )
        }
    })

    const handleClickOutside = () => {
        showTooltip.value = false
    }
</script>

<style scoped>
    .tooltip {
        display: inline-block;
    }

    .tooltip-button {
        background-color: transparent;
        border-width: 0;
        cursor: help;
        padding: 0;
        margin-left: var(--spacing-n5);
    }

    .tooltip__icon {
        color: var(--color-tertiary);
    }

    .tooltip__message {
        position: absolute;
        display: none;
        z-index: var(--level-4);
        max-width: 250px;
        background-color: var(--color-gray-dark);
        border: 2px solid var(--color-tertiary);
        border-radius: var(--spacing-n2);
        margin-top: calc(-1 * var(--spacing-1));
        margin-left: var(--spacing-n1);
    }

    .tooltip__message::before {
        content: '\f0d9';
        font-family: 'Font Awesome 6 Free';
        font-weight: 900;
        position: absolute;
        color: var(--color-tertiary);
        font-size: var(--font-size-medium);
        left: 2px;
        top: 0;
        width: var(--spacing-n1);
        height: var(--spacing-n1);
        transform: translate3d(-100%, 50%, 0);
        z-index: var(--level-2);
    }

    .tooltip__message-inner {
        padding: var(--spacing-n1);
        background-color: var(--color-tertiary-faded);
        font-weight: var(--font-weight-bold);
    }

    .tooltip__message--visible {
        display: initial;
    }

    /* Enhanced focus styles for accessibility */
    .tooltip-button:focus-visible {
        outline: 2px solid var(--color-tertiary);
        outline-offset: 2px;
        border-radius: 2px;
    }

    /* High contrast mode support */
    @media (prefers-contrast: high) {
        .tooltip__message {
            border-width: 3px;
        }

        .tooltip-button:focus-visible {
            outline-width: 3px;
        }
    }
</style>
