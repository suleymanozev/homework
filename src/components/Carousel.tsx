import {useEffect, useRef, useState} from "react";

import type {Photo} from "../types/photo";
import {Box, IconButton} from "@mui/material";
import {ArrowBack, ArrowForward} from "@mui/icons-material";
import {CarouselThumbnail} from "./CarouselThumbnail.tsx";
import {CarouselAlbum} from "./CorouselAlbum";
import CarouselIndicator from "./CarouselIndicator";
import {useObserveElementWidth} from "../hooks/observable-element-width";

interface CarouselProps {
    items: Photo[];
    autoplay?: boolean;
    speed?: number;
    thumbnailsEnabled?: boolean;
    albumEnabled?: boolean;
    indicatorsEnabled?: boolean;
}

export const Carousel = ({
                             items,
                             autoplay = true,
                             speed = 5000,
                             thumbnailsEnabled = true,
                             albumEnabled = true,
                             indicatorsEnabled = true
                         }: CarouselProps) => {
    const [currentItem, setCurrentItem] = useState<Photo>(items[0]);
    const [hover, setHover] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const width = useObserveElementWidth(containerRef);

    const prevItems = (count: number = 1): Photo[] => {
        return new Array(count)
            .fill(true)
            .map((_, i) => items[(items.indexOf(currentItem) - 1 + items.length - i) % items.length])
            .reverse()
    }

    const nextItems = (count: number = 1): Photo[] => {
        return new Array(count)
            .fill(true)
            .map((_, i) => items[(items.indexOf(currentItem) + 1 + i) % items.length])
    }

    useEffect(() => {
        let id: number | null = null;
        if (autoplay && !hover) {
            id = window.setInterval(() => {
                setCurrentItem(nextItems(1)[0]);
            }, speed);
        }

        return () => {
            if (id) {
                clearInterval(id);
            }
        }
    });

    return (
        <>
            <div ref={containerRef} style={{display: 'flex', alignItems: 'center', position: 'relative', width: '100%'}}
                 onMouseEnter={() => setHover(true)}
                 onMouseLeave={() => setHover(false)}>
                <IconButton sx={{position: 'absolute', left: '1rem'}} onClick={() => setCurrentItem(prevItems(1)[0])}>
                    <ArrowBack/>
                </IconButton>
                <IconButton sx={{position: 'absolute', right: '1rem'}} onClick={() => setCurrentItem(nextItems(1)[0])}>
                    <ArrowForward/>
                </IconButton>

                {albumEnabled && <CarouselAlbum sx={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    right: '1rem',
                    padding: '1rem',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    color: '#fff',
                    fontSize: width >= 600 ? '1rem' : '0.75rem',
                }} item={currentItem}/>}

                <img width='100%' src={currentItem.url} alt={currentItem.title}/>
                {thumbnailsEnabled && <Box
                    sx={{position: 'absolute', bottom: width >= 600 ? '3rem' : '2.25rem', left: '1rem', right: '1rem'}}>
                    <Box sx={{
                        backgroundColor: 'rgba(0,0,0,0.2)',
                        padding: width >= 600 ? '0.5rem' : '0.25rem',
                        borderRadius: '0.5rem 0.5rem 0 0',
                        fontSize: width >= 600 ? '1rem' : '0.75rem',
                        color: '#fff'
                    }}>{currentItem.title}</Box>
                    <Box sx={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(7, 1fr)',
                        gap: '1rem',
                        padding: width >= 600 ? '1rem' : '0.5rem',
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        borderRadius: '0 0 0.5rem 0.5rem'
                    }} justifyContent={'space-between'}>
                        {prevItems(3).map((item) =>
                            <CarouselThumbnail key={item.id} item={item} setCurrentItem={setCurrentItem}/>
                        )}
                        <CarouselThumbnail key={currentItem.id} item={currentItem} setCurrentItem={setCurrentItem}/>
                        {nextItems(3).map((item) =>
                            <CarouselThumbnail key={item.id} item={item} setCurrentItem={setCurrentItem}/>
                        )}
                    </Box>
                </Box>}
                {indicatorsEnabled &&
                    <Box sx={{position: 'absolute', bottom: '0.5rem', left: '50%', transform: 'translate(-50%, 0)'}}>
                        <Box sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(7, 1fr)',
                            gap: '1rem',
                        }}>
                            {prevItems(3).map((item) =>
                                <CarouselIndicator key={item.id} containerWidth={width} item={item}
                                                   setCurrentItem={setCurrentItem}/>
                            )}
                            <CarouselIndicator key={currentItem.id} containerWidth={width} active={true}
                                               item={currentItem}
                                               setCurrentItem={setCurrentItem}/>
                            {nextItems(3).map((item) =>
                                <CarouselIndicator key={item.id} containerWidth={width} item={item}
                                                   setCurrentItem={setCurrentItem}/>
                            )}
                        </Box>
                    </Box>
                }
            </div>
        </>
    );
};

export default Carousel;