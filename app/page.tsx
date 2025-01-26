import HomePage from "@/components/MainPage";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import Login from "@/components/Login";

export default async function Home() {
  const session = await getServerSession(authOptions);

//   if (!session) {
//     return <Login />;
//   }

  return <HomePage />;
}