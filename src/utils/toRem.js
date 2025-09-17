/**
 * Converts a pixel value to rem units based on the provided root font size.
 *
 * @param {[number, number]} params - An array containing the pixel value and the root font size.
 * @param {number} params[0] value - The pixel value to convert.
 * @param {number} params[1] root - The root font size to use for conversion.
 * @returns {number} The converted value in rem units.
 */
export const toRem = ([value, root]) => value / root
