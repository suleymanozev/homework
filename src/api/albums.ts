export const fetchAlbum = async (albumId: number) => {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/albums/${albumId}`,
    );

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    return await response.json();
}