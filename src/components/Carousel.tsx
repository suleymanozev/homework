import {useEffect, useState} from "react";

import type {Photo} from "../types/photo";
import {Box, IconButton} from "@mui/material";
import {ArrowBack, ArrowForward} from "@mui/icons-material";
import {CarouselThumbnail} from "./CarouselThumbnail.tsx";

interface CarouselProps {
    items: Photo[];
    autoplay?: boolean;
    interval?: number;
}

export const Carousel = ({items, autoplay = true, interval = 5000}: CarouselProps) => {
    const [currentItem, setCurrentItem] = useState<Photo>(items[0]);
    useEffect(() => {
        let id: number | null = null;
        if (autoplay) {
            id = setInterval(() => {
                nextItem();
            }, interval);
        }

        return () => {
            if (id) {
                clearInterval(id);
            }
        }
    });

    const nextItem = () => {
        setCurrentItem(items[items.indexOf(currentItem) === items.length - 1 ? 0 : items.indexOf(currentItem) + 1]);
    };

    const prevItem = () => {
        setCurrentItem(items[items.indexOf(currentItem) === 0 ? items.length - 1 : items.indexOf(currentItem) - 1]);
    };

    return (
        <>
            <div style={{display: 'flex', alignItems: 'center', position: 'relative', width: 'fit-content'}}>
                <IconButton sx={{position: 'absolute', left: '1rem'}} onClick={prevItem}>
                    <ArrowBack/>
                </IconButton>
                <IconButton sx={{position: 'absolute', right: '1rem'}} onClick={nextItem}>
                    <ArrowForward/>
                </IconButton>

                <img src={currentItem.url} alt={currentItem.title}/>
                <Box sx={{position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem'}}>
                    <Box sx={{backgroundColor: 'rgba(0,0,0,0.2)', padding: '0.5rem'}}>{currentItem.title}</Box>
                    <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)'}} justifyContent={'space-between'}>
                        {new Array(3).fill(true).map((_, i) => items[(items.indexOf(currentItem) - 1 + items.length - i) % items.length]).reverse().map((item) =>
                            <CarouselThumbnail url={item.thumbnailUrl}/>
                        )}
                        <CarouselThumbnail url={currentItem.thumbnailUrl}/>
                        {new Array(3).fill(true).map((_, i) => items[(items.indexOf(currentItem) + 1 + i) % items.length]).map((item) =>

                            <CarouselThumbnail url={item.thumbnailUrl}/>
                        )}
                    </Box>
                </Box>
            </div>
        </>
    );
};

export default Carousel;