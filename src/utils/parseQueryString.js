/**
 * Parses the query string from the current window location and retrieves the value for the specified item.
 * If the value is not a valid number, returns undefined.
 *
 * @param {string} item - The name of the query parameter to retrieve.
 * @returns {(string|undefined)} The value of the query parameter as a string, or undefined if not found or not a number.
 */
export const parseQueryString = (item) => {
    if (typeof window === 'undefined') {
        return
    }

    const searchParams = new URLSearchParams(window.location.search)
    const result = parseInt(searchParams.get(item))

    if (isNaN(result)) {
        return
    }

    return searchParams.get(item)
}
