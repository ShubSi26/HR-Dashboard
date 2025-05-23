"use client";
import { useEffect } from "react";
import useUserStore from "@/lib/store";

export default function useGetEmployee(params: { page?: number; limit?: number }) {
    const data = useUserStore((state) => state.searcheduser);
    const setData = useUserStore((state) => state.setUser);
    const setSearcheduser = useUserStore((state) => state.setSearcheduser);
    const isLoading = useUserStore((state) => state.isLoading);
    const isError = useUserStore((state) => state.isError);
    const setIsLoading = useUserStore((state) => state.setIsLoading);
    const setIsError = useUserStore((state) => state.setIsError);
    

    useEffect(() => {
        const fetchEmployees = async () => {
            setIsLoading(true);
            setIsError(false);
            try {
                const query = new URLSearchParams();
                if (params.page !== undefined) query.append("page", params.page.toString());
                if (params.limit !== undefined) query.append("limit", params.limit.toString());

                const res = await fetch(`/api/employees?${query.toString()}`, {
                    cache: "no-store",
                });

                if (!res.ok) throw new Error("Failed to fetch employees");

                const result = await res.json();
                setData(result);
                setSearcheduser(result);
                
            } catch (err) {
                setIsError(true);
                setData(null);
            } finally {
                setIsLoading(false);
            }
        };

        fetchEmployees();
    }, [params.page, params.limit]);

    return { data, isLoading, isError };
}
