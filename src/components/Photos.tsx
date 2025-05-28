import Carousel from "./Carousel.tsx";
import {usePhotos} from "../hooks";

function Photos() {
    const {photos, isPhotosLoading, isError} = usePhotos();

    if (isPhotosLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching data</div>;

    return (
        <>
            <Carousel items={photos} />
        </>
    );
}

export default Photos;