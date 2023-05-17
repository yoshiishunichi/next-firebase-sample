import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { stories } from "static-data";
import { Story } from "types";

const StoryPage: NextPage = () => {
  const router = useRouter();
  const [story, setStory] = useState<Story>();

  useEffect(() => {
    const id = router.query.id as string | undefined;
    if (!id) {
      return;
    }
    const targetStory = stories.filter((story) => story.id === Number(id))[0];
    if (!targetStory) {
      router.push("/404");
      return;
    }
    setStory(targetStory);
  }, [router]);

  return (
    <div>
      <h1>story: {story?.title}</h1>
      <p>あらすじ: {story?.description}</p>
      <Link href={"/"}>Homeに戻る</Link>
    </div>
  );
};

export default StoryPage;
