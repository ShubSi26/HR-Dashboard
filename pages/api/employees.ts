import type { NextApiRequest, NextApiResponse } from "next";
import users from "@/lib/users";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const page = parseInt((req.query.page as string) || "1");
  const limit = parseInt((req.query.limit as string) || "10");

  const department = ["HR", "IT", "Finance", "Marketing", "Sales"];

  try {
    const data = users;
    const usersWithRating = data.results.map((user: any,i) => ({
      ...user,
      id: i,
      rating: Math.floor(Math.random() * 5) + 1,
      department: department[Math.floor(Math.random() * department.length)],
    }));
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedUsers = usersWithRating.slice(startIndex, endIndex);

    res.status(200).json({
      users: paginatedUsers,
      info: {
        total: usersWithRating.length,
        page,
        limit,
        totalPages: Math.ceil(usersWithRating.length / limit),
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
