<template>
    <div class="custom-select" v-click-outside="closeDropdown">
        <!-- Selected Value Display -->
        <div
            class="custom-select__trigger"
            @click="toggleDropdown"
            :class="{ 'custom-select__trigger--open': isOpen }"
            tabindex="0"
            @keydown.enter="toggleDropdown"
            @keydown.space.prevent="toggleDropdown"
            @keydown.escape="closeDropdown"
            @keydown.arrow-down.prevent="navigateDown"
            @keydown.arrow-up.prevent="navigateUp"
        >
            <span class="custom-select__value">
                {{ selectedLabel }}
            </span>
            <svg
                class="custom-select__arrow"
                :class="{ 'custom-select__arrow--rotated': isOpen }"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                />
            </svg>
        </div>

        <!-- Dropdown Options -->
        <transition name="dropdown">
            <div v-if="isOpen" class="custom-select__dropdown">
                <div
                    v-for="(option, index) in propertyOptions"
                    :key="option.value"
                    class="custom-select__option"
                    :class="{
                        'custom-select__option--selected': option.value === modelValue,
                        'custom-select__option--highlighted': index === highlightedIndex
                    }"
                    @click="selectOption(option)"
                    @mouseenter="highlightedIndex = index"
                >
                    <!-- Option Label -->
                    <span class="custom-select__text">
                        {{ option.label }}
                    </span>

                    <!-- Check icon for selected -->
                    <svg
                        v-if="option.value === modelValue"
                        class="custom-select__check"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
    import { computed, ref } from 'vue'
    import { clickOutside } from '../utils/clickOutside.js'
    import { getSelectedLabel, propertyOptions } from '../utils/propertyUtils.js'

    const props = defineProps({
        modelValue: {
            type: String,
            default: 'font-size'
        },
        label: {
            type: String,
            default: 'CSS Property'
        },
        id: {
            type: String,
            default: 'property-select'
        }
    })

    const emit = defineEmits(['update:modelValue'])

    // Reactive state
    const isOpen = ref(false)
    const highlightedIndex = ref(0)

    // Get selected option label using utility function
    const selectedLabel = computed(() => getSelectedLabel(props.modelValue, propertyOptions))

    // Methods
    const toggleDropdown = () => {
        isOpen.value = !isOpen.value
        if (isOpen.value) {
            // Reset highlighted index to current selection
            const currentIndex = propertyOptions.findIndex((opt) => opt.value === props.modelValue)
            highlightedIndex.value = currentIndex !== -1 ? currentIndex : 0
        }
    }

    const closeDropdown = () => {
        isOpen.value = false
    }

    const selectOption = (option) => {
        emit('update:modelValue', option.value)
        closeDropdown()
    }

    const navigateDown = () => {
        if (!isOpen.value) {
            toggleDropdown()
            return
        }
        highlightedIndex.value = (highlightedIndex.value + 1) % propertyOptions.length
    }

    const navigateUp = () => {
        if (!isOpen.value) {
            toggleDropdown()
            return
        }
        highlightedIndex.value =
            highlightedIndex.value === 0 ? propertyOptions.length - 1 : highlightedIndex.value - 1
    }

    // Use imported click outside directive
    const vClickOutside = clickOutside
</script>

<style lang="scss" scoped>
    @use '../assets/styles/media.scss' as media;

    .custom-select {
        position: relative;
        width: 200px; // Fixed width based on 'Transition Duration'
        display: inline-block;
        @media (max-width: 425px) {
            width: 100%;
        }
    }

    .custom-select__trigger {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 10px var(--spacing-1);
        background-color: var(--color-gray-medium-faded);
        border: 2px solid var(--color-secondary);
        border-radius: var(--spacing-n1);
        cursor: pointer;
        transition: all 0.3s ease;
        font-family: var(--font-family-primary);
        font-size: var(--font-size-base);
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

        &:hover {
            border-color: var(--color-primary);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            transform: translateY(-1px);
        }

        &:focus {
            outline: none;
            border-color: var(--color-primary);
            box-shadow: 0 0 0 3px var(--color-primary-faded);
        }

        &--open {
            border-color: var(--color-primary);
            box-shadow: 0 0 0 3px var(--color-primary-faded);
        }
    }

    .custom-select__value {
        font-weight: var(--font-weight-medium);
        color: var(--color-text-primary);
    }

    .custom-select__arrow {
        width: 20px;
        height: 20px;
        color: var(--color-gray-dark);
        transition: transform 0.3s ease;

        &--rotated {
            transform: rotate(180deg);
        }
    }

    .custom-select__dropdown {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        z-index: 99;
        border: 2px solid var(--color-primary);
        border-radius: 5px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
        margin-top: var(--spacing-n2);
        max-height: 300px;
        overflow-y: auto;
        overflow-x: hidden;
        backdrop-filter: blur(10px);
    }

    .custom-select__option {
        display: flex;
        align-items: center;
        padding: var(--spacing-0);
        cursor: pointer;
        transition: all 0.2s ease;
        border-bottom: 1px solid var(--color-gray-medium-faded);
        gap: var(--spacing-0);

        &:last-child {
            border-bottom: none;
        }

        &:hover,
        &--highlighted {
            background: linear-gradient(90deg, var(--color-primary-faded) 0%, transparent 100%);
            transform: translateX(4px);
        }

        &--selected {
            background: linear-gradient(
                90deg,
                var(--color-primary) 0%,
                var(--color-primary-faded) 100%
            );
            color: white;
            font-weight: var(--font-weight-bold);
        }
    }

    .custom-select__icon {
        font-size: 18px;
        width: 24px;
        text-align: center;
        flex-shrink: 0;
    }

    .custom-select__text {
        flex: 1;
        font-weight: var(--font-weight-medium);
        color: var(--color-text-primary);
        font-size: var(--font-size-base);
        padding: 10px 10px;
    }

    .custom-select__check {
        width: 16px;
        height: 16px;
        color: currentColor;
        flex-shrink: 0;
    }

    // Dropdown transition
    .dropdown-enter-active,
    .dropdown-leave-active {
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    }

    .dropdown-enter-from {
        opacity: 0;
        transform: translateY(-10px) scale(0.95);
    }

    .dropdown-leave-to {
        opacity: 0;
        transform: translateY(-10px) scale(0.95);
    }

    // Responsive design
    @include media.mq-tablet-min {
        .custom-select__option {
            padding: var(--spacing-0) var(--spacing-1);
        }

        .custom-select {
            width: 200px; // Slightly wider on larger screens
        }
    }

    // Custom scrollbar for dropdown
    .custom-select__dropdown {
        &::-webkit-scrollbar {
            width: 6px;
        }

        &::-webkit-scrollbar-track {
            background: var(--color-gray-medium-faded);
            border-radius: 3px;
        }

        &::-webkit-scrollbar-thumb {
            background: var(--color-primary);
            border-radius: 3px;

            &:hover {
                background: var(--color-primary-dark);
            }
        }
    }
</style>
