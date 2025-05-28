import {useEffect, useState} from "react";

import type {Photo} from "../types/photo";
import {Box, IconButton} from "@mui/material";
import {ArrowBack, ArrowForward} from "@mui/icons-material";

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
            <Box sx={{display: 'flex', alignItems: 'center', position: 'relative', width: 'fit-content'}}>
                <IconButton sx={{position: 'absolute', left: '1rem'}} onClick={prevItem}>
                    <ArrowBack/>
                </IconButton>
                <IconButton sx={{position: 'absolute', right: '1rem'}} onClick={nextItem}>
                    <ArrowForward/>
                </IconButton>
                <Box sx={{
                    position: 'absolute',
                    width: '100%',
                    textAlign: 'center',
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    color: 'white',
                    bottom: '2rem'
                }}>{currentItem.title}</Box>
                <img src={currentItem.url} alt={currentItem.title} loading="lazy"/>
                <Box>
                    {/*{new Array(5).fill(true).map((_, index) => (*/}
                    {/*    <CarouselIndicator text={'1'} active={false}/>*/}
                    {/*))}*/}
                </Box>
            </Box>
        </>
    );
};

export default Carousel;