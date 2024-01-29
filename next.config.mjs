/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  eslint: {
    dirs: ["app", "utils", "components"], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
}

export default nextConfig
