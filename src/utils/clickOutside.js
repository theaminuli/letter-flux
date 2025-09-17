/**
 * Vue directive to detect clicks outside of an element.
 * 
 * Usage:
 * Bind this directive to an element and provide a handler function.
 * The handler will be called when a click occurs outside the bound element.
 *
 * @type {Object}
 * @property {Function} mounted - Sets up the click event listener on document.
 * @property {Function} unmounted - Removes the click event listener from document.
 *
 */
export const clickOutside = {
    mounted(el, binding) {
        el._clickOutside = (event) => {
            if (!(el === event.target || el.contains(event.target))) {
                binding.value(event)
            }
        }
        document.addEventListener('click', el._clickOutside, true)
    },
    unmounted(el) {
        document.removeEventListener('click', el._clickOutside, true)
        delete el._clickOutside
    }
}
