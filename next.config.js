/** @type {import('next').NextConfig} */
const nextConfig = {
  headers() {
    return [
      {
        headers: [
          {
            key: "Cache-Control",
            value: `public, max-age=${60 * 60 * 24 * 30}, stale-while-revalidate=${60 * 60 * 24}`,
          },
        ],
        source: "/:path*",
      },
      {
        headers: [
          {
            key: "Cache-Control",
            value: `public, max-age=0`,
          },
        ],
        source: "/api/:path*",
      },
    ];
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
