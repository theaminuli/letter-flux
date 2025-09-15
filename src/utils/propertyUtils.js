// CSS Property utilities for the PropertySelect component

/**
 * Get all available CSS property options
 * @returns {Array} Array of property objects with value and label
 */
export const propertyOptions = [
    { value: 'font-size', label: 'Font Size' },
    { value: 'line-height', label: 'Line Height' },
    { value: 'letter-spacing', label: 'Letter Spacing' },
    { value: 'word-spacing', label: 'Word Spacing' },
    { value: 'margin', label: 'Margin' },
    { value: 'padding', label: 'Padding' },
    { value: 'gap', label: 'Gap' },
    { value: 'width', label: 'Width' },
    { value: 'max-width', label: 'Max Width' },
    { value: 'border-radius', label: 'Border Radius' },
    { value: 'border-width', label: 'Border Width' },
    { value: 'flex-basis', label: 'Flex Basis' },
    { value: 'left', label: 'Position Left' },
    { value: 'top', label: 'Position Top' },
    { value: 'transition-duration', label: 'Transition Duration' }
]

/**
 * Get the display label for a selected property value
 * @param {string} value - The CSS property value
 * @param {Array} options - The property options array (optional, uses default if not provided)
 * @returns {string} The human-readable label or fallback text
 */
export const getSelectedLabel = (value, options = propertyOptions) => {
    const option = options.find((opt) => opt.value === value)
    return option ? option.label : 'Select Property'
}

/**
 * Get the emoji icon for a CSS property
 * @param {string} property - The CSS property name
 * @returns {string} The corresponding emoji icon
 */
export const getPropertyIcon = (property) => {
    const icons = {
        'font-size': '📝',
        'line-height': '📏',
        'letter-spacing': '🔤',
        'word-spacing': '📄',
        margin: '📦',
        padding: '🟫',
        gap: '↔️',
        width: '↔️',
        'max-width': '📐',
        'border-radius': '🔵',
        'border-width': '🔲',
        'flex-basis': '📊',
        left: '⬅️',
        top: '⬆️',
        'transition-duration': '⏱️'
    }
    return icons[property] || '⚙️'
}
