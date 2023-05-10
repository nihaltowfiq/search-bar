/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	compiler: {
		styledComponents: true,
		// removeConsole: true,
	},
	images: { domains: ['i.ibb.co'] },
};

module.exports = nextConfig;

