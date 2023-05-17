import ky from "ky";
import Link from "next/link";

import { baseUrl, testEnvMessage } from "config";
import { Story } from "types";

import type { GetStaticProps, NextPage } from "next";

type HomeProps = {
  stories: Story[];
};

const Home: NextPage<HomeProps> = ({ stories }) => {
  return (
    <div>
      <h1>Home</h1>
      <p>testEnvMessage: {testEnvMessage}</p>
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
  const res = await ky.get(`${baseUrl}/api/stories`);
  const stories = await res.json<Story[]>();
  return {
    props: {
      stories,
    },
  };
};

export default Home;
