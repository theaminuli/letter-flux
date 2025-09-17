/**
 * Converts a relative size (e.g., rem or em) to pixels based on the root font size.
 *
 * @param {[number, number]} params - An array containing the relative size and the root font size.
 * @param {number} params[0] - The relative size to convert (e.g., rem or em value).
 * @param {number} params[1] - The root font size in pixels.
 * @returns {number} The computed pixel value.
 */
export const toPx = ([relativeSize, rootFontSize]) => relativeSize * rootFontSize
