import {useQuery} from "@tanstack/react-query";
import {fetchAlbum} from "../../api";
import type {Album} from "../../types/album";

export const useGetAlbum = (albumId: number) => {
    const {data, isLoading, isError, error, refetch} = useQuery<Album>({
        queryKey: ["album", albumId],
        queryFn: () => fetchAlbum(albumId),
    });

    return {
        album: data,
        isAlbumLoading: isLoading,
        isError: isError,
        error: error,
        refetchAlbum: refetch
    };
};