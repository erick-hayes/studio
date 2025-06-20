import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  /* config options here */
  // output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Serve static files from the public directory, including icons
  // This is usually enabled by default in Next.js, but explicitly stating it here for clarity
  // and in case any custom server setup might interfere.
  // However, direct manipulation of `public` folder serving is not typical in `next.config.js`.
  // Next.js handles this automatically.
  // We ensure the PWA files are in the `public` directory.
};

export default nextConfig;
