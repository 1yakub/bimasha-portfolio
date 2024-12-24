/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true, // Add this line for static exports if needed
  },
}

module.exports = nextConfig