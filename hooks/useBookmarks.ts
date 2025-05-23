"use client";

import { useEffect, useState } from "react";
import {useBookmarkStore} from "@/lib/store";

export default function useBookmarks() {

    const bookmark = useBookmarkStore((state) => state.bookmark);
    const setBookmark = useBookmarkStore((state) => state.setBookmark);
    const [isLoading,setIsLoading] = useState(true);
    const [isError,setIsError] = useState(false);

    useEffect(()=>{
        const fetchBookmarks = async () => {
            setIsLoading(true);
            setIsError(false);
            try {
                const res = await fetch(`/api/bookmark`, {
                    cache: "no-store",
                });

                if (!res.ok) throw new Error("Failed to fetch bookmarks");

                const result = await res.json();
                setBookmark(result.users);
                
            } catch (err) {
                setIsError(true);
                setBookmark([]);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBookmarks();
    },[])

    return { bookmark, isLoading, isError };
}