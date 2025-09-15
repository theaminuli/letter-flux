import { setToPrecision } from './setToPrecision.js'

const getDynamicValue = (fluid, relative) => {
	if (relative === 0 || !relative) {
		return `${fluid}vw`
	}

	return relative < 0 ? `${fluid}vw - ${-1 * relative}rem` : `${fluid}vw + ${relative}rem`
}

export const getClampValue = ([min, fluid, relative, max]) =>
	`clamp(${setToPrecision(min, 3)}rem, ${getDynamicValue(fluid, relative)}, ${setToPrecision(
		max,
		3
	)}rem)`
