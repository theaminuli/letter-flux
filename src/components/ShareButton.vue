<template>
    <button
        @click="copyToClipboard"
        :title="shareUrl"
        class="share-button"
        :aria-label="hasCopied ? 'Link copied to clipboard' : 'Copy shareable link to clipboard'"
        :aria-describedby="hasCopied ? 'share-status' : null"
    >
        <i v-if="hasCopied" class="fa-solid fa-check" aria-hidden="true" />
        <i v-else class="fa-solid fa-share-from-square" aria-hidden="true" />
        {{ hasCopied ? 'Link copied' : 'Copy link' }}
        <span v-if="hasCopied" id="share-status" class="sr-only" aria-live="polite">
            Link successfully copied to clipboard
        </span>
    </button>
</template>

<script setup>
    import { ref } from 'vue'
    import { shareUrl } from '../stores/fluidTypographyStore.js'

    const hasCopied = ref(false)

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl.value)
            hasCopied.value = true
            setTimeout(() => {
                hasCopied.value = false
            }, 1000)
        } catch (err) {
            console.error('Failed to copy text: ', err)
        }
    }
</script>

<style scoped>
    .share-button {
        cursor: pointer;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        color: var(--color-secondary);
        background-color: var(--color-secondary-faded);
        border: 2px solid currentColor;
        padding: var(--spacing-n1) var(--spacing-1);
        font-family: var(--font-family-primary);
        border-radius: var(--spacing-n2);
        text-decoration: none;
        min-width: 180px;
    }

    .share-button i {
        padding-right: var(--spacing-n4);
    }

    .share-button:hover,
    .share-button:active,
    .share-button:focus {
        box-shadow: 0 0 2px 1px var(--color-secondary);
    }

    /* Enhanced focus styles for accessibility */
    .share-button:focus-visible {
        outline: 2px solid var(--color-secondary);
        outline-offset: 2px;
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

    /* High contrast mode support */
    @media (prefers-contrast: high) {
        .share-button {
            border-width: 3px;
        }

        .share-button:focus-visible {
            outline-width: 3px;
        }
    }
</style>
