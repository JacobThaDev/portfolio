/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'robohash.org',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'i.pravatar.cc',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'flowbite.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'www.dioneprotocol.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'cdn.akamai.steamstatic.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'jacobtha.dev',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: 'preview.jacobtha.dev',
          port: '',
          pathname: '/**',
        },
      ],
    },
  }
  
  module.exports = nextConfig
  