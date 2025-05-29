import type {Photo} from "../types/photo.ts";

interface CarouselThumbnailProps {
    item: Photo,
    setCurrentItem(item: Photo): void;
}

export function CarouselThumbnail({item, setCurrentItem}: CarouselThumbnailProps) {
    return (
        <div key={item.id}>
            <a style={{cursor: 'pointer'}} onClick={() => setCurrentItem(item)}>
                <img
                    style={{width: '100%', border: '0.1rem solid #fff', borderRadius: '0.5rem'}}
                    src={item.thumbnailUrl}
                    alt=""/>
            </a>
        </div>
    );
}