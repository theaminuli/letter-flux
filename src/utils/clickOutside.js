// Vue directive for click outside functionality
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
