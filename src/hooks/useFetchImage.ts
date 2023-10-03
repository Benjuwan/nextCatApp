import { useCallback } from "react";
import { TypeCatApp } from "@/app/ts/TypeCatApp";

export const useFetchImage = () => {
    const fetchImage = useCallback(async (
        url: string
    ): Promise<TypeCatApp> => {
        const res = await fetch(url);
        const images: Array<TypeCatApp> = await res.json();
        console.log(images);
        return images[0];
    }, []);

    return { fetchImage }
}