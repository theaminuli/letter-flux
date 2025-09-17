/**
 * Generates a shareable URL for the Letter Flux application with specified font size parameters.
 *
 * @param {[number, number, number, number, number]} params - An array containing the following font size parameters:
 * @returns {string} The generated share URL with the specified parameters.
 */
export const getShareUrl = ([rootFontSize, min, fluid, relative, max]) =>
    `https://letter-flux.vercel.app/?rootFontSize=${rootFontSize}&minSize=${min}&fluidSize=${fluid}&relativeSize=${relative}&maxSize=${max}`
