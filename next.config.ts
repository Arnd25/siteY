// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'strapitest.ybru.ru', // ← без пробелов, без точки в конце
                port: '',
                pathname: '/uploads/**', // ← важно: только /uploads/, не /api/articles/upload/
            },
        ],
    },
    reactCompiler: true,
};

export default nextConfig;