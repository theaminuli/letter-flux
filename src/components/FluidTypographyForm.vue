<template>
    <ul class="form-list">
        <li>
            <InputWithRange
                id="root-font-size"
                unit="px"
                label="Root font size"
                :min="1"
                :max="64"
                v-model="rootFontSize"
            >
                <Message v-if="rootFontSize <= 0" id="root-font-size" type="error">
                    Incorrect font size value.
                </Message>
            </InputWithRange>
        </li>
        <li>
            <InputWithRange
                id="min-size"
                unit="px"
                label="Min size"
                :min="1"
                :max="128"
                :step="1"
                v-model="minSize"
            >
                <Message v-if="minSize > maxSize" id="min-max-size" type="error">
                    Fluid snippet doesn't have any effect. Minimum size is larger than maximum size.
                </Message>
            </InputWithRange>
        </li>
        <li>
            <InputWithRange
                id="max-size"
                unit="px"
                label="Max size"
                :min="1"
                :max="128"
                :step="1"
                v-model="maxSize"
            >
                <Message v-if="minSize > maxSize" id="min-max-size" type="error">
                    Fluid snippet doesn't have any effect. Minimum size is larger than maximum size.
                </Message>
            </InputWithRange>
        </li>
        <li>
            <InputWithRange
                id="fluid-size"
                unit="vw"
                label="Fluid size"
                :min="-5"
                :max="5"
                v-model="fluidSize"
            >
                <Message v-if="fluidSize === 0" id="fluid-size" type="warning">
                    Fluid snippet doesn't have any effect. Fluid size should be above 0
                </Message>
            </InputWithRange>
        </li>
        <li>
            <InputWithRange
                id="relative-size"
                unit="rem"
                label="Relative size"
                :min="-3"
                :max="3"
                :step="0.25"
                v-model="relativeSize"
            >
                <Message
                    v-if="relativeSize > -1 && relativeSize < 1"
                    id="relative-size"
                    type="warning"
                >
                    Value should be -1 and less or 1 and more to support user font size settings.
                </Message>
            </InputWithRange>
        </li>
    </ul>
</template>

<script setup>
    import InputWithRange from './InputWithRange.vue'
    import Message from './Message.vue'
    import {
        fluidSize,
        maxSize,
        minSize,
        relativeSize,
        rootFontSize
    } from '../stores/fluidTypographyStore.js'
</script>

<style lang="scss" scoped>
    @use '../assets/styles/media.scss' as media;

    .form-list {
        margin-bottom: var(--spacing-2);
        list-style: none;
        padding: 0;
        border: 2px solid var(--color-secondary-tint);
        background: var(--color-secondary-faded);
        border-radius: var(--spacing-n2);
        padding: var(--spacing-1) var(--spacing-1) calc(var(--spacing-1) + var(--spacing-n2));

        // Mobile landscape to tablet: 2 columns
        @media (min-width: 35.5rem) and (max-width: 64rem) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: var(--spacing-2);
        }

        // Desktop: 5 columns
        @include media.mq-desktop-min {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
        }

        // Large height: 5 columns
        @include media.mq-heightLarge {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-gap: var(--spacing-2);
        }
    }

    .form-list li + li {
        margin-top: var(--spacing-1);

        // Remove top margin when in grid layout
        @media (min-width: 35.5rem) and (max-width: 85.3125rem) {
            margin-top: 0;
        }

        @include media.mq-heightLarge {
            margin-top: 0;
        }
    }
</style>
