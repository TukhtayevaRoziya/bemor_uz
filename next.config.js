const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    env: {
      _next_intl_trailing_slash: "false",
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https', // Or 'http' if needed
            hostname: 'example.com', // Replace with your domain
            port: '',          // Optional: specify a port if needed
            pathname: '/images/**', // Optional: specify a pathname pattern
          },
          { // Add additional remote patterns as needed
            protocol: 'https',
            hostname: 'another-example.com',
            pathname: '/**',
          },
        ],
      },
  };
  
  module.exports = nextConfig;

module.exports = withNextIntl(nextConfig);
