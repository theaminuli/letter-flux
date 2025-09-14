<template>
    <button @click="copyToClipboard" :title="shareUrl" class="share-button">
        <i v-if="hasCopied" class="fa-solid fa-check" />
        <i v-else class="fa-solid fa-share-from-square" />
        {{ hasCopied ? 'Link copied' : 'Copy link' }}
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
</style>
