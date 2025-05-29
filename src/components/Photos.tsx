import Carousel from "./Carousel.tsx";
import {useGetPhotos} from "../hooks";
import {Grid} from "@mui/material";

function Photos() {
    const {photos, isPhotosLoading, isError} = useGetPhotos();

    if (isPhotosLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching data</div>;

    return (
        <>
            <Grid container spacing={2}>
                <Grid size={2}>
                    <Carousel items={photos}/>
                </Grid>
                <Grid size={10} />
                <Grid size={4}>
                    <Carousel items={photos}/>
                </Grid>
                <Grid size={8} />
                <Grid size={6}>
                    <Carousel items={photos}/>
                </Grid>
                <Grid size={6} />
                <Grid size={8}>
                    <Carousel items={photos}/>
                </Grid>
                <Grid size={4} />
                <Grid size={10}>
                    <Carousel items={photos}/>
                </Grid>
                <Grid size={2} />
                <Grid size={12}>
                    <Carousel items={photos}/>
                </Grid>
            </Grid>
        </>
    );
}

export default Photos;