import ky from "ky";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";

import { baseUrl } from "config";
import { stories } from "static-data";
import { Story } from "types";

type StoryPageProps = {
  story: Story;
};

const StoryPage: NextPage<StoryPageProps> = ({ story }) => {
  return (
    <div>
      <h1>story: {story.title}</h1>
      <p>あらすじ: {story.description}</p>
      <Link href={"/"}>Homeに戻る</Link>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    fallback: false,
    paths: stories.map((story) => {
      return {
        params: { id: story.id.toString() },
      };
    }),
  };
};

export const getStaticProps: GetStaticProps<StoryPageProps> = async ({ params }) => {
  const id = params?.id as string;

  const res = await ky.get(`${baseUrl}/api/stories/${id}`);
  const { story } = await res.json<{ story: Story }>();

  return {
    props: {
      story,
    },
  };
};

export default StoryPage;
