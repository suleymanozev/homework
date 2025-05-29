import type {Photo} from "../../types";

interface CarouselThumbnailProps {
    item: Photo,
    containerWidth: number;
    setCurrentItem(item: Photo): void;
}

export function CarouselThumbnail({item, containerWidth, setCurrentItem}: CarouselThumbnailProps) {
    return (
        <div key={item.id}>
            <a style={{cursor: 'pointer'}} onClick={() => setCurrentItem(item)}>
                <img
                    style={{width: '100%', border: containerWidth >= 600 ? '0.1rem solid #fff' : 'initial', borderRadius: '0.5rem'}}
                    src={item.thumbnailUrl}
                    alt=""/>
            </a>
        </div>
    );
}