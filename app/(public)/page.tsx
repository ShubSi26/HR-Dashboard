"use server";
import { redirect } from "next/navigation";
import useGetUserDetails from "@/hooks/useGetUser";
import SearchBar from "@/components/searchbar";
import UsersCard from "@/components/usersCard";
import Departments from "@/components/department";
import RatingSearchBar from "@/components/rating";

export default async function Home() {
  const session = await useGetUserDetails();

  const name = session?.user?.name?.split(" ")[0];
  const email = session?.user?.email;

  const date = new Date();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className=" w-full max-h-screen overflow-auto">
      <div className=" flex flex-row p-4 justify-between items-center w-full">
        <div className="flex items-start flex-col">
          < h1 className="text-2xl font-bold text-center">
          Welcome {name}
          </h1>
          <span className="text-sm pb-4">{email}</span>

          <SearchBar/>
        </div>

        <div  className="hidden sm:block">
          <h1 className="text-2xl font-bold text-center"> 
            {date.toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </h1>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col-reverse max-h-10/12">
        <UsersCard/>
        <div className="sm:w-1/3 w-full h-full p-2">
          <Departments/>
          <RatingSearchBar/>
        </div>
      </div>

      
    </div>
  );
}