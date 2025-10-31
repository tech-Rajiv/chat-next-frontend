/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false,
  },

  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://chat-express-ovf0.onrender.com/api/:path*",
      },
      {
        source: "/users/:path*",
        destination: "https://chat-express-ovf0.onrender.com/users/:path*",
      },
    ];
  },
};

export default nextConfig;
