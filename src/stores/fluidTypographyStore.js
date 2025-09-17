import { ref, computed } from 'vue'
import { getClampValue } from '../utils/getClampValue.js'
import { getShareUrl } from '../utils/getShareUrl.js'
import { parseQueryString } from '../utils/parseQueryString.js'
import { toPx } from '../utils/toPx.js'
import { toRem } from '../utils/toRem.js'

// Base writable stores
export const rootFontSize = ref(parseQueryString('rootFontSize') || 16)
export const minSize = ref(parseQueryString('minSize') || 24)
export const maxSize = ref(parseQueryString('maxSize') || 36)
export const fluidSize = ref(parseQueryString('fluidSize') || 2)
export const relativeSize = ref(parseQueryString('relativeSize') || 1)

// Derived computed values
export const minSizeRem = computed(() => toRem([minSize.value, rootFontSize.value]))
export const maxSizeRem = computed(() => toRem([maxSize.value, rootFontSize.value]))
export const relativeSizePx = computed(() => toPx([relativeSize.value, rootFontSize.value]))

export const clampValue = computed(() =>
    getClampValue([minSizeRem.value, fluidSize.value, relativeSize.value, maxSizeRem.value])
)

/**
 * A computed ref that generates a shareable URL based on the current fluid typography settings.
 *
 * The URL is constructed using the following parameters:
 * - rootFontSize: The base font size for the document.
 * - minSize: The minimum font size allowed.
 * - fluidSize: The fluid scaling factor for responsive typography.
 * - relativeSize: The relative font size adjustment.
 * - maxSize: The maximum font size allowed.
 *
 * @constant
 * @type {import('vue').ComputedRef<string>}
 */
export const shareUrl = computed(() =>
    getShareUrl([
        rootFontSize.value,
        minSize.value,
        fluidSize.value,
        relativeSize.value,
        maxSize.value
    ])
)
