const fs = require('fs')
import path from "path";

const RAW = fs.readFileSync(path.resolve(process.cwd(), 'blog.config.js'), 'utf-8')
const config = eval(`((module = { exports }) => { ${RAW}; return module.exports })()`)

// If we need to stripe out some private fields
const clientConfig = config

module.exports = {
  config,
  clientConfig
}
