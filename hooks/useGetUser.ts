import { getServerSession } from "next-auth"
export default async function getUser() {
  const session = await getServerSession();
  return session;
}