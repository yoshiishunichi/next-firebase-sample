import Link from "next/link";

import { stories } from "static-data";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        {stories.map((story) => (
          <li key={story.id}>
            <Link href={`/stories/${story.id}/`}>
              {story.id}: {story.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
