
'use client';

import { Button } from 'flowbite-react';
import { useRouter } from "next/navigation";

export default function Home() {
const router = useRouter()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1>Hello World</h1>
    <div className="flex flex-wrap gap-2">
      <Button onClick={() => router.replace('/blog')}>Blog</Button>
      <Button color="blue">Blue</Button>
      <Button color="gray">Gray</Button>
      <Button color="dark">Dark</Button>
      <Button color="light">Light</Button>
      <Button color="success">Success</Button>
      <Button color="failure">Failure</Button>
      <Button color="warning">Warning</Button>
      <Button color="purple">Purple</Button>
    </div>
    </main>
  );
}


