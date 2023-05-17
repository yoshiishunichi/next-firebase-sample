import { jsonBaseUrl, baseUrl } from "config";

import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { method } = req;

    if (method !== "GET") return res.status(400).json({ message: "Bad Request" });

    const jsonUrl = `${jsonBaseUrl}/index.json`;
    const htmlUrl = baseUrl;
    // 不特定多数にパージされるとキャッシュが消えてサーバーへのアクセスが増えるのでコメントアウト
    // await ky(jsonUrl, {
    //   method: "PURGE",
    // });
    // await ky(htmlUrl, {
    //   method: "PURGE",
    // });

    return res.status(200).json({ message: "success" });
  } catch (e) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export default handler;
