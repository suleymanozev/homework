import Carousel from "./Carousel.tsx";
import {useGetPhotos} from "../hooks";
import {Grid, Typography} from "@mui/material";

function Photos() {
    const {photos, isPhotosLoading, isError} = useGetPhotos();

    if (isPhotosLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching data</div>;

    return (
        <>
            <Grid container spacing={2}>
                <Grid size={12}>
                    <Typography variant='h4'>
                        Tüm özellikler aktif
                    </Typography>
                </Grid>
                <Grid size={{xs:12, md: 4, lg: 3, xl: 2}}>
                    <Carousel items={photos}/>
                </Grid>
                <Grid size={10}/>
                <Grid size={12}>
                    <Typography variant='h4'>
                        Küçük resimler kapalı
                    </Typography>
                </Grid>
                <Grid size={{xs:12, md: 4}}>
                    <Carousel items={photos} thumbnailsEnabled={false}/>
                </Grid>
                <Grid size={8}/>
                <Grid size={12}>
                    <Typography variant='h4'>
                        Albüm ismi kapalı
                    </Typography>
                </Grid>
                <Grid size={{xs:12, md: 6}}>
                    <Carousel items={photos} albumEnabled={false}/>
                </Grid>
                <Grid size={6}/>
                <Grid size={12}>
                    <Typography variant='h4'>
                        Göstergeler kapalı
                    </Typography>
                </Grid>
                <Grid size={{xs:12, md: 8}}>
                    <Carousel items={photos} indicatorsEnabled={false}/>
                </Grid>
                <Grid size={4}/>
                <Grid size={12}>
                    <Typography variant='h4'>
                        Tüm özellikler aktif
                    </Typography>
                </Grid>
                <Grid size={{xs:12, md: 10}}>
                    <Carousel items={photos}/>
                </Grid>
                <Grid size={2}/>
            </Grid>
        </>
    );
}

export default Photos;