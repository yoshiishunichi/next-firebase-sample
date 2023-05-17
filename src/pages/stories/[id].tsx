import ky from "ky";
import { GetServerSideProps, NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import { baseUrl } from "config";
import { cacheHeaderKey, swrHeaderValue } from "static-data";
import { Story } from "types";

type StoryPageProps = {
  story: Story;
};

const StoryPage: NextPage<StoryPageProps> = ({ story }) => {
  const { id, title, description, image } = story;
  const { path, width, height } = image;

  return (
    <div>
      <h1>story: {title}</h1>
      <Image alt={`${id}`} height={height} src={path} width={width} />
      <p>あらすじ: {description}</p>
      <Link href={"/"}>Homeに戻る</Link>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<StoryPageProps> = async ({ params, res }) => {
  res.setHeader(cacheHeaderKey, swrHeaderValue);

  const id = params?.id as string;

  const apiResponse = await ky.get(`${baseUrl}/api/stories/${id}`);
  const { story } = await apiResponse.json<{ story: Story }>();

  return {
    props: {
      story,
    },
  };
};

export default StoryPage;
