//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: false,
  },
  images: {
    domains: ['i.ytimg.com', 'res.cloudinary.com'],
  },
  experimental: {},
};

const plugins = [withNx];

module.exports = composePlugins(...plugins)(nextConfig);
