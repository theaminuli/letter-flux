<template>
    <div class="snippet">
        <button
            class="snippet__button"
            @click="copyToClipboard"
            aria-label="Copy CSS code to clipboard"
            :aria-describedby="copyStatus ? 'copy-status' : null"
        >
            <i class="fa-solid fa-copy" aria-hidden="true" />
            <i
                :class="[
                    'fa-solid',
                    'fa-copy',
                    'snippet__icon',
                    { 'snippet__icon--animated': isAnimated }
                ]"
                aria-hidden="true"
            />
        </button>
        <pre
            class="snippet__wrapper"
            role="region"
            aria-label="Generated CSS code"
        ><code class="snippet__code" :aria-label="`CSS code: ${generatedCSS}`">{{ generatedCSS }}</code>
        </pre>
        <div v-if="copyStatus" id="copy-status" class="sr-only" aria-live="polite">
            {{ copyStatus }}
        </div>
    </div>
    <PropertySelect v-model="selectedProperty" id="css-property-select" />
</template>

<script setup>
    import { computed, ref } from 'vue'
    import {
        copyToClipboard as copyTextToClipboard,
        generateCSS,
        triggerAnimation
    } from '../utils/snippetUtils.js'
    import PropertySelect from './PropertySelect.vue'

    const props = defineProps({
        text: {
            type: String,
            required: true
        }
    })

    const isAnimated = ref(false)
    const selectedProperty = ref('font-size')
    const copyStatus = ref('')

    // Generate CSS using utility function
    const generatedCSS = computed(() => {
        return generateCSS(selectedProperty.value, props.text)
    })

    const copyToClipboard = async () => {
        const success = await copyTextToClipboard(generatedCSS.value)
        if (success) {
            triggerAnimation(isAnimated, 300)
            copyStatus.value = 'CSS code copied to clipboard'
            setTimeout(() => {
                copyStatus.value = ''
            }, 3000)
        } else {
            copyStatus.value = 'Failed to copy CSS code'
            setTimeout(() => {
                copyStatus.value = ''
            }, 3000)
        }
    }
</script>

<style lang="scss" scoped>
    @use '../assets/styles/media.scss' as media;

    .snippet {
        display: inline-flex;
        align-items: center;
        border: 2px solid var(--color-gray-light);
        background-color: var(--color-gray-medium-faded);
        border-radius: 8px;
        color: var(--color-gray-light);
        max-width: 100%;
        overflow: auto;

        @include media.mq-desktop-min {
            display: flex;
        }
    }

    .snippet__wrapper {
        padding: 0px 10px;
        display: flex;
        max-width: calc(3 * var(--spacing-5));
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
    }

    .snippet__code {
        font-family: var(--font-family-mono);
        user-select: all;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
        white-space: break-spaces;
    }

    .snippet__button {
        background: transparent;
        border-width: 0;
        border-right: 2px solid var(--color-gray-light);
        padding: var(--spacing-n2) var(--spacing-n1);
        color: var(--color-gray-light);
        font-size: var(--font-size-medium);
        cursor: pointer;
        position: relative;
    }

    .snippet__button:hover {
        background: var(--color-gray-medium-faded);
    }

    .snippet__icon {
        position: absolute;
        left: 50%;
        right: 0;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
    }

    .snippet__icon--animated {
        animation: moveAndFade 0.3s ease-out;
    }

    @keyframes moveAndFade {
        from {
            opacity: 1;
            transform: translate3d(-50%, -50%, 0) scale(1);
        }
        to {
            opacity: 0;
            transform: translate3d(-50%, -50%, 0) scale(2);
        }
    }

    /* Screen reader only text */
    .sr-only {
        position: absolute !important;
        width: 1px !important;
        height: 1px !important;
        padding: 0 !important;
        margin: -1px !important;
        overflow: hidden !important;
        clip: rect(0, 0, 0, 0) !important;
        white-space: nowrap !important;
        border: 0 !important;
    }

    /* Enhanced focus styles */
    .snippet__button:focus-visible {
        outline: 2px solid var(--color-secondary);
        outline-offset: 2px;
    }

    /* High contrast mode support */
    @media (prefers-contrast: high) {
        .snippet {
            border-width: 3px;
        }

        .snippet__button:focus-visible {
            outline-width: 3px;
        }
    }

    /* Reduced motion support */
    @media (prefers-reduced-motion: reduce) {
        .snippet__icon--animated {
            animation: none;
        }
    }
</style>
