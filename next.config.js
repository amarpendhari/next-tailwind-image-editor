/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // distDir: 'dist',
  // output: 'export',
  env: {
    // declare here all your variables
    NEXT_API_URL: process.env.NEXT_API_URL,
  }
}

module.exports = nextConfig
