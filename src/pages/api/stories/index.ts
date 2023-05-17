// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { stories } from "static-data";
import { Story } from "types";

import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(_: NextApiRequest, res: NextApiResponse<Story[]>) {
  res.status(200).json(stories);
}
