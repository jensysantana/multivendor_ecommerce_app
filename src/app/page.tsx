
import ThemeToggle from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="p-5">
      <div className="w-full flex justify-end">
        <UserButton />
        <ThemeToggle />
      </div>

      {/* <Button variant={"destructive"} className="text-white">My button</Button> */}
      {/* className="text-white bg-indigo-500 rounded-3xl" */}
      <h1 className="text-blue-500 font-barlow">
        Home Page
      </h1>

    </div>
  );
}
