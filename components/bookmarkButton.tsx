"use client";

import { useState } from "react";

export default function bookmarkButton({onClick,bookmark}:{onClick?: () => void,bookmark?: boolean}) {

    const [bookmarked,setbookmarked] = useState(bookmark || false);

    const click = ()=>{
        setbookmarked(!bookmarked);
        if(onClick) onClick();
    }

    return (
        <button onClick={click}  className=" flex hover:bg-slate-100 hover:text-slate-700 transition-all cursor-pointer text-white font-bold py-2 px-4 rounded-3xl">
           {bookmarked ? 
           <>
                <svg  xmlns="http://www.w3.org/2000/svg"  width={24}  height={24}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-pinned"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 4v6l-2 4v2h10v-2l-2 -4v-6" /><path d="M12 16l0 5" /><path d="M8 4l8 0" /></svg>
                <span>Bookmarked</span>
           </>
           :
            <>
                <svg  xmlns="http://www.w3.org/2000/svg"  width={24}  height={24}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 4.5l-4 4l-4 1.5l-1.5 1.5l7 7l1.5 -1.5l1.5 -4l4 -4" /><path d="M9 15l-4.5 4.5" /><path d="M14.5 4l5.5 5.5" /></svg>
                <span>Bookmark</span>
            </>
        }
        </button>
    );

}