/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: [
      'googleapis',
      'google-auth-library',
      'gaxios',
    ],
  },
};

export default nextConfig;