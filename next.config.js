const path = require('path')
const withSass = require('@zeit/next-sass')
const aliases = require('./webpack.config.alias')

module.exports = withSass({
  webpack(config, options) {
    const { alias } = config.resolve
    config.resolve.alias = {
      ...alias,
      ...aliases
    }
    return config
  },
  // ssr: false,
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
})
