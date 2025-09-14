<template>
    <article class="form-wrapper">
        <div>
            <label class="form__label" for="track-screen-width">Add screen width to track</label>
        </div>

        <form class="form" ref="formRef" @submit="handleSubmit">
            <button class="form__button" type="submit">
                <i v-if="added" class="fa-solid fa-check" />
                <i v-else class="fa-solid fa-plus" />
            </button>
            <input
                class="form__input"
                id="track-screen-width"
                type="number"
                :min="0"
                required
                v-model="screenWidth"
            />
            <span class="form__unit">px</span>
        </form>
    </article>
</template>

<script setup>
    import { ref } from 'vue'
    import { trackers } from '../stores/trackerStore.js'
    import { generateUniqueId } from '../utils/trackerUtils.js'

    const screenWidth = ref(null)
    const formRef = ref(null)
    const added = ref(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const id = generateUniqueId()

        if (screenWidth.value <= 0) {
            return
        }

        trackers.value = [...trackers.value, { id, width: screenWidth.value }]
        formRef.value.reset()
        screenWidth.value = null
        added.value = true

        setTimeout(() => {
            added.value = false
        }, 1000)
    }
</script>

<style scoped>
    .form {
        border-radius: var(--spacing-n2);
        border: 2px solid var(--color-secondary);
        display: inline-flex;
        background-color: var(--color-secondary-faded);
        margin-bottom: var(--spacing-1);
    }

    .form:focus-within {
        box-shadow: 0 0 2px 1px var(--color-secondary);
    }

    .form__label {
        font-family: var(--font-family-primary);
        margin-bottom: var(--spacing-n2);
        display: inline-block;
    }

    .form__input,
    .form__button,
    .form__unit {
        background-color: transparent;
        border-width: 0;
        padding: var(--spacing-n1) var(--spacing-n1);
        line-height: 1;
    }

    .form__input {
        font-weight: var(--font-weight-bold);
        color: var(--color-gray-light);
        outline: 0;
    }

    .form__button {
        color: var(--color-secondary);
        font-size: var(--font-size-medium);
        color: var(--color-secondary);
        border-right: 2px solid var(--color-secondary);
        aspect-ratio: 1;
        min-width: calc(var(--spacing-2) + var(--spacing-n3));
        cursor: pointer;
    }

    .form__unit {
        font-weight: var(--font-weight-bold);
        color: var(--color-secondary);
        border-left: 2px solid var(--color-secondary);
        line-height: 1.5;
        padding: var(--spacing-n1);
        aspect-ratio: 1;
    }
</style>
