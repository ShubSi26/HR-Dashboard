import type { NextApiRequest, NextApiResponse } from "next";
import users from "@/lib/users";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const department = ["HR", "IT", "Finance", "Marketing", "Sales"];

  try {
    const data = users;
    const { id } = req.query;

    const user = data.results[Number(id)]



    res.status(200).json({
      ...user,
      department: department[Math.floor(Math.random() * department.length)]
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
}



