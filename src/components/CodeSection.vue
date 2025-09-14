<template>
    <div>
        <Message v-if="minSize >= maxSize" type="error">
            Fluid snippet doesn't have any effect. Minimum size is larger than maximum size.
        </Message>

        <Message v-if="relativeSize > -1 && relativeSize < 1" type="warning">
            It's recommended to set "Relative Size" to a value -1 or less or 1 and greater to
            support user font size preferences.
        </Message>
    </div>
</template>

<script setup>
    import Message from './Message.vue'
    import { minSize, maxSize, relativeSize } from '../stores/fluidTypographyStore.js'
</script>
