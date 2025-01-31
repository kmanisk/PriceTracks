import HomePage from "@/components/MainPage";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import Login from "@/components/Login";
import RedirectButton from "@/components/Redirect";
export default async function Home() {
  //const session = await getServerSession(authOptions);
  // Create a redirect button that will navigate to /manisk

  //   if (!session) {
  //     return <Login />;
  //   }

  return (
    <main>
      <RedirectButton />
      {/* Button to trigger redirect */}
      <HomePage />
    </main>
  );

}
