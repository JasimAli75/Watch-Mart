import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-4xl font-bold text-blue-800">
      <h3>Jasim Ali new Project update</h3>
      <Button variant="outline">click me</Button>
    </main>
  );
}
