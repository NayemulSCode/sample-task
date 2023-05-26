/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: { esmExternals: true },
    images: {
        domains: [
           'fakestoreapi.com'
        ],
    },
}

module.exports = nextConfig
