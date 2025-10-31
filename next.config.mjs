/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false,
  },

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://chat-express-ovf0.onrender.com/api/:path*", // Proxy to Render backend
      },
    ];
  },
};

export default nextConfig;
