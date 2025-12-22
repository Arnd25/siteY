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
    reactCompiler: true,
};

export default nextConfig;
