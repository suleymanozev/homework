import type {Photo} from "../../types";
import {useGetAlbum} from "../../hooks";
import {Box, type BoxProps} from "@mui/material";

interface CarouselAlbumProps extends BoxProps {
    item: Photo
}

export function CarouselAlbum({item, ...props}: CarouselAlbumProps) {
    console.log("CarouselAlbum", item);
    const {album, isAlbumLoading, isError} = useGetAlbum(item.albumId)

    return (
        <>
            {isAlbumLoading && (<Box {...props}>...</Box>)}
            {!isError && album && (<Box {...props}>Album: {album.title}</Box>)}
        </>
    );
}