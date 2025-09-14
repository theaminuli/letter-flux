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
