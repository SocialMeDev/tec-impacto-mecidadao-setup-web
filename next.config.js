/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    ENVIRONMENT: process.env.ENVIRONMENT,
    APP_KEY: process.env.APP_KEY,
    INSTITUTION_SLUG: process.env.INSTITUTION_SLUG,
    INSTITUTION_API_URL: process.env.INSTITUTION_API_URL,
  },
}

module.exports = nextConfig
