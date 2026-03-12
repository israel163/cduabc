const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/cduabc" : "",
  assetPrefix: isProd ? "/cduabc/" : "",
};

export default nextConfig;
