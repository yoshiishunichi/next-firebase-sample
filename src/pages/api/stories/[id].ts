// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { stories } from "static-data";

import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (!id) {
    res.status(400).json({ error: "Missing id" });
  }

  const story = stories[Number(id)];
  if (!story) {
    res.status(404).json({ error: "Not Found" });
  }

  res.status(200).json({ story: stories[Number(id)] });
}
