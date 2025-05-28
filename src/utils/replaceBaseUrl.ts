export const replaceBaseUrl = (url: string, newPathname: string): string => {
    const parser = new URL(url); // Parse the original URL
    const newUrlObject = new URL(parser?.pathname, newPathname); // Replace the base URL while keeping the path
    return newUrlObject?.toString(); // Return the updated URL as a string
};