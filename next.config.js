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
  trailingSlash: true,
  webpack: (config, { buildId, webpack }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env.NEXT_BUILD_ID": JSON.stringify(buildId),
      }),
    );

    return config;
  },
};

module.exports = nextConfig;
