/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "agdxtilhlswciswxjeqt.supabase.co",
      },
    ],
  },
};

export default nextConfig;
