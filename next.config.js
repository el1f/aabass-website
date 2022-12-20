const { i18n } = require('./next-i18next.config');

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {   
    providerImportSource: "@mdx-js/react",
    rehypePlugins: [],
    remarkPlugins: [],
  },
})


/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      issuer: /\.[jt]sx?$/,
      test: /\.svg$/i,
      use: [{
        loader: "@svgr/webpack",
        options: {
          svgoConfig: {
            plugins: [
              {
                active: false, 
                name: 'cleanupIDs',
              },
              {
                active: false, 
                name: 'collapseGroups',
              }
            ]
          }
        }
      }]
    })
    return config
  }
}

module.exports = withMDX(nextConfig)
