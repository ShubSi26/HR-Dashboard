"use client";

import { motion } from "framer-motion";
import useGetEmploye from "@/hooks/useGetEmploye";
import UserCard from "./userCard";
import { useState } from "react";
import Pagination from "./pagination";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export default function UsersCard() {

    const [page, setPage] = useState(1);

    const { data, isLoading, isError } = useGetEmploye({ page: page, limit: 10 });

    if (isLoading)
        return <div className="flex justify-center items-center w-2/3 h-96">Loading...</div>;

    if (isError)
        return <div className="flex justify-center items-center w-full h-full">Error...</div>;

    return (<div className="sm:w-2/3 w-full min-h-11/12 h-full max-h-9/12 overflow-y-auto">
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="  min-h-10/12 h-full max-h-9/12 overflow-y-auto"
        >
            <div className="overflow-y-auto gap-2 grid scrollbar-none">
                {data.users.map((user: any) => (
                    <UserCard key={user.login.uuid} user={user} />
                ))}
                {data.users.length === 0  && (
                    <div className="flex justify-center items-center w-full h-full">
                        <h1 className="text-2xl font-bold text-center">
                            No users found
                        </h1>
                    </div>
                )}

            </div>
        </motion.div>
        <Pagination page={page} setPage={setPage} totalPages={5}/>
    </div>);
}
