import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default async function Home() {

  return (
    <div className="flex flex-row-reverse">
      <Link href="/auth/login">
        <Button className="bg-violet-500 hover:bg-violet-400">
          Login
        </Button>
      </Link>
    </div>
  );
}
