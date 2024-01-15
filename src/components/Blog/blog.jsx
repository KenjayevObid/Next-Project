"use client";

import { Button, Card } from "flowbite-react";
import card from "../../../public/th.jpg";
import Image from "next/image";
import Link from "next/link";



export default function Component({post}) {
console.log(post);
  return (
  
    <Card
      className="max-w-sm m-4"
      renderImage={() => (
        <Image width={500} height={500} src={card} alt="image 1" />
      )}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {post.title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {post.body}
      </p>
      <Button>
      <Link  href={`/blog/${post._id}`}>READ MORE</Link>
       
      </Button>
    </Card>
  );
}
