/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [{
            protocol: "http",
            hostname: "accuratess.mywire.org",
            port: "8003",
        }]
    }
}

module.exports = nextConfig