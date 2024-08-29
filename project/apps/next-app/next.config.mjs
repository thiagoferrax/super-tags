/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,
	images: {
		formats: ["image/webp", "image/avif"],
	},
	async redirects() {
        return [
          {
            source: '/',
            destination: '/home',
            permanent: false,
          },]
      },
};

export default nextConfig;
