"use client";
import { useRef } from "react";
import useUserStore from "@/lib/store";

export default function SearchBar() {
    const inputRef = useRef<HTMLInputElement>(null);

    const user = useUserStore((state) => state.user);
    const setUser = useUserStore((state) => state.setSearcheduser);


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (user) {
            const filteredUsers = user.users.filter((item: any) =>
                item.name.first.toLowerCase().includes(value.toLowerCase()) || item.department.toLowerCase().includes(value.toLowerCase()) || item.name.last.toLowerCase().includes(value.toLowerCase()) || item.email.toLowerCase().includes(value.toLowerCase())
            );
            setUser({users: filteredUsers, total: user.total});
        }
    };

    return (
        <div className="flex items-center w-96 bg-zinc-800 text-white px-4 py-2 rounded-2xl shadow-md  max-w-md transition-all focus-within:ring-2 focus-within:ring-blue-500">
            <span className="text-lg mr-3">🔍</span>
            <input
            onChange={handleInputChange}
                ref={inputRef}
                type="text"
                placeholder="Search by name, email or department"
                className="bg-transparent outline-none placeholder-zinc-400 text-sm w-full"
            />
        </div>
    );
}
