"use client";

import { motion } from "framer-motion";
import ViewButton from "./viewButton";
import BookmarkButton from "./bookmarkButton";
import PromoteButton from "./promoteButton";
import Ratingbar from "./ratingbar";
import { useRouter } from "next/navigation";

const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0 },
};

export default function userCard({ user }: { user: any }) {
    const router = useRouter();
    return (
        <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full h-full p-2"
        >
            <div className="flex flex-row justify-center items-center w-fit h-full">
                <img src={user.picture.large} alt="user" className="rounded-full w-14 h-14"/>
                <div className="flex flex-col justify-center items-start w-full h-full pl-4">
                    <h1 className="text-xl font-bold text-center">
                        {user.name.first} {user.name.last}
                    </h1>
                    <span className="text-sm">{user.email}</span>
                    <Ratingbar rating={user.rating}/>
                </div>
                
            </div>

            <div className="flex flex-row gap-2 justify-between w-full sm:w-fit sm:justify-between items-center ">
                <span>{user.department}</span>
                <div className="flex">
                    <ViewButton onClick={()=>{router.push( `/employee/${user.id}`)}}/>
                    <BookmarkButton />
                    <PromoteButton />
                </div>
                
            </div>
        </motion.div>
    );
}
