import Carousel from "./Carousel.tsx";
import {usePhotos} from "../hooks/features/photos.ts";

function Photos() {
    const {photos, isPhotosLoading, isError, error} = usePhotos();

    if (isPhotosLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching data</div>;

    return (
        <>
            <Carousel items={photos} isLoading={isPhotosLoading} isError={isError} error={error} />
        </>
    );
}

export default Photos;