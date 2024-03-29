const { withContentlayer } = require("next-contentlayer");

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  swcMinify: false,
};

module.exports = withContentlayer(nextConfig);
