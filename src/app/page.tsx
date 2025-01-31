import HomePage from "@/components/MainPage";
import Login from "@/components/Login";
import RedirectButton from "@/components/Redirect";
export default async function Home() {
  // Create a redirect button that will navigate to /manisk

  //   if (!session) {
  //     return <Login />;
  //   }

  return (
    <main>
      <HomePage />
      {/* <RedirectButton /> */}
    </main>
  );

}
