// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'strapitest.ybru.ru',
                port: '',
            },
        ],
    },
    async rewrites() {
        return [
            {
        source: "/api/:path*",
        destination: "https://strapitest.ybru.ru/api/:path*",
      },
      {
        source: "/uploads/:path*",
        destination: "https://strapitest.ybru.ru/uploads/:path*",
      },
        ];
    },
    reactCompiler: true,
};

export default nextConfig;
