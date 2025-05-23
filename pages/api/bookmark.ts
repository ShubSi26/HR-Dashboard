
import type { NextApiRequest, NextApiResponse } from "next";
import users from "@/lib/users";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const department = ["HR", "IT", "Finance", "Marketing", "Sales"];

  try {
    const data = users;
    const usersWithRating = data.results.map((user: any,i) => ({
      ...user,
      id: i,
      rating: Math.floor(Math.random() * 5) + 1,
      department: department[Math.floor(Math.random() * department.length)],
    }));

    res.status(200).json({
      users: usersWithRating,
    });

  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
