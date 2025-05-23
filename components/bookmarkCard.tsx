"use client";

import { motion } from "framer-motion";
import ViewButton from "./viewButton";
import RemovebookmarkButton from "./removeBookmark";
import AssignButton from "./assignButton";
import Ratingbar from "./ratingbar";
import { useRouter } from "next/navigation";
import { useBookmarkStore } from "@/lib/store";

const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0 },
};

export default function BookmarkCard({ user }: { user: any }) {
    const router = useRouter();
    const bookmark = useBookmarkStore((state) => state.bookmark);
    const setBookmark = useBookmarkStore((state) => state.setBookmark);

    const RemoveBookmark = () => {
        const newBookmark = bookmark.filter((item: any) => item.id !== user.id);
        setBookmark(newBookmark);
    }   

    return (
        <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-between items-center w-full h-full sm:p-2"
        >
            <div className="flex flex-row justify-start sm:justify-center items-center w-full sm:w-fit h-full">
                <svg  xmlns="http://www.w3.org/2000/svg"  width={50}  height={50}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-pinned"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 4v6l-2 4v2h10v-2l-2 -4v-6" /><path d="M12 16l0 5" /><path d="M8 4l8 0" /></svg>
                <img src={user.picture.large} alt="user" className="rounded-full w-14 h-14"/>
                <div className="flex flex-col justify-center items-start w-full h-full p-1">
                    <h1 className="text-xl font-bold text-center">
                        {user.name.first} {user.name.last}
                    </h1>
                    <span className="text-sm">{user.email}</span>
                    <Ratingbar rating={user.rating}/>
                </div>
                
            </div>

            <div className="flex gap-2 justify-end w-full sm:w-fit sm:justify-center items-center ">
                <span>{user.department}</span>
                <ViewButton onClick={()=>{router.push( `/employee/${user.id}`)}}/>
                <RemovebookmarkButton onClick={RemoveBookmark} />
                <AssignButton />
            </div>
        </motion.div>
    );
}
