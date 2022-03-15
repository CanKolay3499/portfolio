const dotenv = require('dotenv')
dotenv.config()

/**
 * @type {import('next').NextConfig}
 */
const config = {
  swcMinify: true,
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  }
}

module.exports = config
