"use client";
import useBookmarks from "@/hooks/useBookmarks";
import BookmarkCard from "@/components/bookmarkCard";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export default function BookmarksPage() {
    const { bookmark, isLoading, isError } = useBookmarks();

    if (isLoading) return <div className="w-full h-full flex items-center justify-center">Loading...</div>;
    if (isError) return <div>Error loading bookmarks</div>;

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="w-full h-full mx-auto mt-8 p-6 rounded-xl shadow-md overflow-auto"
        >
            <h1 className="text-2xl font-semibold mb-4">Bookmarks</h1>
            {bookmark.length === 0 ? (
                <p>No bookmarks found.</p>
            ) : (
                <ul className="list-disc pl-6">
                    {bookmark.map((item:any) => (
                        <BookmarkCard user={item} key={item.id}/>
                    ))}
                </ul>
            )}
        </motion.div>
    );
}
