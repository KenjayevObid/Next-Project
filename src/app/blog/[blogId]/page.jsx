import React from "react";
import card from "../../../../public/th.jpg";
import Image from "next/image";
import { Button, Card } from "flowbite-react";

const getData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`);
  return res.json();
};
const SlugPage = async ({ params }) => {
  const post = await getData(params.blogId);
  return (
    <div>
      <Card
        
        renderImage={() => (
          <Image width={500} height={500} src={card} alt="image 1" />
        )}
        horizontal
      >
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {post.title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {post.body}{" "}
        </p>
        <Button>Click</Button>
      </Card>
    </div>
  );
};

export default SlugPage;
