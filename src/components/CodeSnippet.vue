<template>
    <div class="snippet">
        <button class="snippet__button" @click="copyToClipboard">
            <i class="fa-solid fa-copy" />
            <i
                :class="[
                    'fa-solid',
                    'fa-copy',
                    'snippet__icon',
                    { 'snippet__icon--animated': isAnimated }
                ]"
            />
        </button>
        <pre class="snippet__wrapper"><code class="snippet__code">{{ text }}</code></pre>
    </div>
</template>

<script setup>
    import { ref } from 'vue'

    const props = defineProps({
        text: {
            type: String,
            required: true
        }
    })

    const isAnimated = ref(false)

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(props.text)
            isAnimated.value = true
            setTimeout(() => {
                isAnimated.value = false
            }, 300)
        } catch (err) {
            console.error('Failed to copy text: ', err)
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
        padding: var(--spacing-n2) var(--spacing-n1);
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
</style>
