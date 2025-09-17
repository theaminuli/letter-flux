import { setToPrecision } from './setToPrecision.js'

/**
 * Generates a dynamic CSS value string combining `vw` and `rem` units.
 *
 * @param {number} fluid - The fluid value to be used with `vw` unit.
 * @param {number} relative - The relative value to be added or subtracted in `rem` units.
 *   If zero or falsy, only the `vw` value is returned.
 *   If negative, the value is subtracted as `vw - rem`.
 *   If positive, the value is added as `vw + rem`.
 * @returns {string} The resulting CSS value string.
 */
const getDynamicValue = (fluid, relative) => {
    if (relative === 0 || !relative) {
        return `${fluid}vw`
    }

    return relative < 0 ? `${fluid}vw - ${-1 * relative}rem` : `${fluid}vw + ${relative}rem`
}

/**
 * Generates a CSS clamp() value string using the provided min, fluid, relative, and max values.
 *
 * @param {[number, number, number, number]} values - An array containing:
 *   min (number): The minimum value (in rem units).
 *   fluid (number): The fluid value for dynamic calculation.
 *   relative (number): The relative value for dynamic calculation.
 *   max (number): The maximum value (in rem units).
 * @returns {string} The CSS clamp() value string.
 */
export const getClampValue = ([min, fluid, relative, max]) =>
    `clamp(${setToPrecision(min, 3)}rem, ${getDynamicValue(fluid, relative)}, ${setToPrecision(
        max,
        3
    )}rem)`
