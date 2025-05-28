export const fetchPhotos = async () => {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos",
    );

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return await response.json();
}