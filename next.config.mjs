/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/code.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/gdpr.html",
        destination: "/gdpr",
        permanent: true,
      },
      {
        source: "/privacy-policy.html",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/terms-of-service.html",
        destination: "/terms-of-service",
        permanent: true,
      },
    ]
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/gdpr",
          destination: "/gdpr.html",
        },
        {
          source: "/privacy-policy",
          destination: "/privacy-policy.html",
        },
        {
          source: "/terms-of-service",
          destination: "/terms-of-service.html",
        },
      ],
    }
  },
}

export default nextConfig
