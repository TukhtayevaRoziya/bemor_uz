const createNextIntlPlugin = require('next-intl/plugin');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    env: {
      _next_intl_trailing_slash: "false",
    },
    images: {
      domains: ['example.com', 'another-example.com'],
    },
  };
  
  module.exports = nextConfig;

module.exports = withNextIntl(nextConfig);
