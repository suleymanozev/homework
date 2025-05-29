import type {Photo} from "../types/photo.ts";

interface CarouselIndicatorProps {
    item: Photo,
    containerWidth: number,
    active?: boolean,
    setCurrentItem(item: Photo): void;
}

function CarouselIndicator({item, containerWidth, active = false, setCurrentItem}: CarouselIndicatorProps) {
    return (
        <a style={{
            cursor: 'pointer',
            background: active ? '#fff' : 'rgba(255,255,255,0.5)',
            color: active ? '#000' : '#fff',
            borderRadius: '0.5rem',
            width: 'fit-content',
            textAlign: 'center',
            fontSize: containerWidth >= 600 ? '0.75rem': '0.5rem',
            padding: containerWidth >= 600 ? '0.5rem' : '0.25rem',
            display: 'flex',
            justifyContent: 'center',
        }} onClick={() => setCurrentItem(item)}>
            {item.id}
        </a>
    );
}

export default CarouselIndicator;