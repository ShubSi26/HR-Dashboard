"use client";
import { useEffect, useState } from "react";
import Ratingbar from "./ratingbar";
import useUserStore from "@/lib/store";

export default function RatingSearch(){

    const [rating, setRating] = useState(-1);
    const user = useUserStore((state) => state.user);
    const setSearcheduser = useUserStore((state) => state.setSearcheduser);

    useEffect(()=>{
        if(rating !== -1){
            const filteredUsers = user.users.filter((item: any) =>
                item.rating === rating
            );
            setSearcheduser({users: filteredUsers, total: filteredUsers.length});
        }
    },[rating]);

    const clear = () => {
        setRating(-1);
        setSearcheduser(user);
    }

    return (
        <div className="w-full h-full">
            <h1 className="text-2xl font-bold text-white">Rating</h1>

            <div className="flex flex-row w-full justify-around items-center">
                <Ratingbar rating={rating === -1 ? 5 : rating}/>
                <div className="flex gap-4 h-full ">
                    <div onClick={()=> {if (rating < 5) setRating(rating + 1)}} > 
                        <svg  xmlns="http://www.w3.org/2000/svg"  width={24}  height={24}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-up"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M16 9l-4 -4" /><path d="M8 9l4 -4" /></svg>
                    </div>
                    <div onClick={()=> {if (rating > 1) setRating(rating - 1)}}>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width={24}  height={24}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-down"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M18 13l-6 6" /><path d="M6 13l6 6" /></svg>
                    </div>
                </div>
            </div>

            <div onClick={clear} className="cursor-pointer w-full text-center">clear</div>
        </div>
    )
}