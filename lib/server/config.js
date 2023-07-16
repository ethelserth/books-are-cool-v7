const fs = require('fs')
const { resolve } = require('path')

const RAW = fs.readFileSync(resolve(process.cwd(), 'blog.config.js'), 'utf-8')
const CONFIG = eval(`((module = { exports }) => { ${RAW}; return module.exports })()`)

// If we need to stripe out some private fields
const config = CONFIG
const clientConfig = CONFIG

module.exports = {
  config,
  clientConfig
}
