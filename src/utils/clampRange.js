/**
 * Clamps a number within the inclusive range specified by min and max.
 *
 * @param {number} num - The number to clamp.
 * @param {number} min - The lower bound of the range.
 * @param {number} max - The upper bound of the range.
 * @returns {number} The clamped value within the specified range.
 */
export const clampRange = (num, min, max) => Math.min(Math.max(num, min), max)
