<template>
    <div>
        <label class="input__label" :for="id">{{ label }}</label>
        <slot />
        <div class="input__wrapper">
            <input
                :id="id"
                class="input__element"
                type="number"
                :value="modelValue"
                @input="$emit('update:modelValue', parseFloat($event.target.value))"
                v-bind="$attrs"
            />
            <span class="input__unit">{{ unit }}</span>
        </div>
        <input
            :aria-labelledby="id"
            class="input__range"
            type="range"
            :value="modelValue"
            @input="$emit('update:modelValue', parseFloat($event.target.value))"
            v-bind="$attrs"
        />
    </div>
</template>

<script setup>
    defineProps({
        label: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        },
        unit: {
            type: String,
            default: ''
        },
        modelValue: {
            type: [Number, Object],
            required: true
        }
    })

    defineEmits(['update:modelValue'])
</script>

<style scoped>
    .input__label {
        font-family: var(--font-family-primary);
        display: inline-block;
        margin-bottom: var(--spacing-n2);
    }

    .input__wrapper {
        display: flex;
        border: 2px solid var(--color-secondary);
        background-color: var(--color-secondary-faded);
        border-radius: var(--spacing-n4);
        margin-bottom: var(--spacing-n1);
    }

    .input__wrapper:focus-within {
        border-color: var(--color-secondary);
        box-shadow: 0 0 3px 1px var(--color-secondary);
    }

    .input__element {
        font-weight: var(--font-weight-bold);
        padding: var(--spacing-n3);
        background-color: transparent;
        border-width: 0;
        color: var(--color-gray-light);
        width: 100%;
        padding: var(--spacing-n2) var(--spacing-n1);
        outline: 0;
    }

    .input__unit {
        padding: var(--spacing-n3) var(--spacing-n2);
        font-family: var(--font-family-primary);
        border-left: inherit;
        min-width: calc(4ch + 2 * var(--spacing-n2));
        text-align: center;
        color: var(--color-secondary);
    }

    .input__range {
        display: block;
        width: 100%;
    }
</style>
