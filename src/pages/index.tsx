import Link from "next/link";

import { stories } from "static-data";
import { Story } from "types";

import type { GetStaticProps, NextPage } from "next";

type HomeProps = {
  stories: Story[];
};

const Home: NextPage<HomeProps> = ({ stories }) => {
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

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  // const res = await ky.get(`${baseUrl}/api/stories`);
  // const stories = await res.json<Story[]>();
  return {
    props: {
      stories,
    },
  };
};

export default Home;
