/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
};

export default nextConfig;
