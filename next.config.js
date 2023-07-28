/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains:["res.cloudinary.com","api.multiavatar.com", "avatars.githubusercontent.com"]
  }
}

module.exports = nextConfig
