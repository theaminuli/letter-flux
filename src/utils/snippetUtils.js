// Code snippet utilities for the CodeSnippet component

/**
 * Generate CSS code by combining a property name with a value
 * @param {string} property - The CSS property name
 * @param {string} value - The CSS value (e.g., clamp() function)
 * @returns {string} The complete CSS declaration
 */
export const generateCSS = (property, value) => {
    return `${property}: ${value};`
}

/**
 * Copy text to clipboard using the Clipboard API
 * @param {string} text - The text to copy to clipboard
 * @returns {Promise<boolean>} Promise that resolves to true if successful, false if failed
 */
export const copyToClipboard = async (text) => {
    try {
        await navigator.clipboard.writeText(text)
        return true
    } catch (err) {
        console.error('Failed to copy text: ', err)
        return false
    }
}

/**
 * Trigger a temporary animation state
 * @param {Object} animationRef - A Vue ref object for the animation state
 * @param {number} duration - Animation duration in milliseconds (default: 300)
 */
export const triggerAnimation = (animationRef, duration = 300) => {
    animationRef.value = true
    setTimeout(() => {
        animationRef.value = false
    }, duration)
}
