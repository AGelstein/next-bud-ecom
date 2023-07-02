import { AuthRequiredError } from "@/utils/errors/unauthorized";

const session = null;

export default function Home() {
  if (!session) throw new AuthRequiredError();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Home Page
    </main>
  );
}
