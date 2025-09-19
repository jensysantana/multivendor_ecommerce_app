
import ThemeToggle from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-5">
      <div className="w-full flex justify-end">
        <ThemeToggle />
      </div>

      <Button variant={"destructive"} className="text-white">My button</Button>
      {/* className="text-white bg-indigo-500 rounded-3xl" */}

    </div>
  );
}
