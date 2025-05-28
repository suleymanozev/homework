import {Button} from "@mui/material";

interface CarouselIndicatorProps {
    text: string;
    active: boolean;
}

function CarouselIndicator(props: CarouselIndicatorProps) {
    return (
        <Button variant='outlined'>{props.text}</Button>
    );
}

export default CarouselIndicator;