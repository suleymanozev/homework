import {useQuery} from "@tanstack/react-query";
import {fetchPhotos} from "../../api";
import type {Photo} from "../../types/photo.ts";
import {replaceBaseUrl} from "../../utils/replaceBaseUrl.ts";

export const usePhotos = () => {
    const {data, isLoading, isError, error, refetch} = useQuery<Photo[]>({
        queryKey: ["photos"],
        queryFn: fetchPhotos,
    });

    return {
        photos: data?.map(photo => ({
            ...photo,
            url: replaceBaseUrl(photo.url, 'https://dummyimage.com'),
            thumbnailUrl: replaceBaseUrl(photo.thumbnailUrl, 'https://dummyimage.com'),
        })) as Photo[],
        isPhotosLoading: isLoading,
        isError: isError,
        error: error,
        getUserData: refetch
    };
};