"use client";
import useUserStore from "@/lib/store";
import { useEffect, useState } from "react";
import clsx from "clsx";
export default function Departments(){
    const department = ["HR", "IT", "Finance", "Marketing", "Sales"];

    const user = useUserStore((state) => state.user);
    const setSearcheduser = useUserStore((state) => state.setSearcheduser);

    const [cilcked, setClicked] = useState<String[]>([]);

    const clickHandler = () => {
        
        if (user) {

            if (cilcked.length === 0) {
                setSearcheduser(user);
                return;
            }

            const filteredUsers = user.users.filter((user: any) =>{
                for (let i = 0; i < cilcked.length; i++) {
                    if (user.department === cilcked[i]) {
                        return true;
                    }
                }
                return false;
            });
            setSearcheduser({users: filteredUsers, total: filteredUsers.length});
        }
    }

    useEffect(() => {
        clickHandler();
    }, [cilcked]);

    return (
        <div className="h-full w-full">
            <h1 className="text-2xl font-bold text-white">Departments</h1>
            <div className="flex flex-col gap-4 mt-4 h-full w-full">
                {department.map((item, index) => (
                    <div
                        
                        key={index}
                        className={clsx(
                            "p-4 w-full rounded-lg shadow-md cursor-pointer flex justify-between items-center",
                            cilcked.includes(item) ? "bg-white text-black" : "bg-slate-900 text-white"
                        )}
                    >
                        <h2 onClick={() => setClicked([...cilcked, item])}
                            className={clsx(
                                "text-xl font-semibold",
                                cilcked.includes(item) ? "text-black" : "text-white"
                            )}
                        >
                            {item}
                        </h2>
                        {cilcked.includes(item) && (
                            <div onClick={()=>{
                                setClicked(cilcked.filter((i) => i !== item));
                            }}>
                                <svg  xmlns="http://www.w3.org/2000/svg"  width={24}  height={24}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )

}