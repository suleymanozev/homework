export function CarouselThumbnail({ url }: { url: string }) {
    return (
        <div style={{ backgroundColor:'rgba(0,0,0,0.4)', padding: '0.5rem' }} key={url}>
            <img
                style={{ width: '100%' }}
                src={url}
                alt=""/>
        </div>
    );
}