import ky from "ky";

import { baseUrl, jsonBaseUrl } from "config";

import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req;

    if (method !== "GET") return res.status(400).json({ message: "Bad Request" });

    await ky.get(`${baseUrl}/`);
    await ky.get(`${jsonBaseUrl}/index.json`);
    return res.status(200).json({ message: "success" });
  } catch (e) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default handler;
