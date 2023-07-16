module.exports = {
  images: {
    domains: ['gravatar.com']
  },
  outputFileTracing: true,
  eslint: {
    // dirs: ['components', 'layouts', 'lib', 'pages']
  },
  images: {
    domains: ['www.notion.so', 'images.unsplash.com', 's3.us-west-2.amazonaws.com']
  },
  async headers() {
    return [
      {
        source: '/:path*{/}?',
        headers: [
          {
            key: 'Permissions-Policy',
            value: 'interest-cohort=()'
          }
        ]
      }
    ]
  },
  transpilePackages: ['dayjs'],
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat'
      })
    }
    return config
  }
}
