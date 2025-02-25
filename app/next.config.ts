import { nextConfig } from "./nextConfig";

export default nextConfig;

module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  experimental: { esmExternals: 'loose' },
}
