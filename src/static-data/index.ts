import { Story } from "types";

export const stories: Story[] = [
  {
    description: "首相が豚と…",
    id: 1,
    image: {
      height: 282,
      path: "/images/1.png",
      width: 500,
    },
    title: "国歌",
  },
  {
    description: "超管理社会",
    id: 2,
    image: {
      height: 572,
      path: "/images/2.png",
      width: 1024,
    },
    title: "1500万メリット",
  },
  {
    description: "記憶をデータとして正確に閲覧できる世界の話",
    id: 3,
    image: {
      height: 569,
      path: "/images/1.png",
      width: 1007,
    },
    title: "人生の軌跡のすべて",
  },
];

export const cacheHeaderKey = "Cache-Control";
export const swrHeaderValue = `public, s-maxage=${60 * 60}, stale-while-revalidate=${60 * 60 * 30}`;
