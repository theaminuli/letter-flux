import { clampRange } from './clampRange.js'

/**
 * Generates a unique numeric ID based on the current timestamp and a random multiplier.
 * @returns {number} A unique numeric identifier.
 */
export const generateUniqueId = () => Math.floor(Math.random() * Date.now())

/**
 * Calculates a size value based on screen size, fluid size percentage, and a relative pixel value,
 * clamped between a minimum and maximum value.
 *
 * @param {number} screenSize - The current screen size in pixels.
 * @param {number} fluidSize - The fluid size as a percentage (0-100).
 * @param {number} relativeSizePx - The relative size in pixels to be added.
 * @param {number} minValue - The minimum allowed value.
 * @param {number} maxValue - The maximum allowed value.
 * @returns {number} The calculated and clamped size value.
 */
export const calculateSizeValue = (screenSize, fluidSize, relativeSizePx, minValue, maxValue) => {
    if (minValue >= maxValue) return minValue

    return clampRange(
        Math.round((fluidSize / 100) * screenSize + relativeSizePx),
        minValue,
        maxValue
    )
}
