const fs = require('fs')
const { join } = require('path')

const raw = fs.readFileSync(join(process.cwd(), 'blog.config.js'), 'utf-8')
const config = eval(`((module = { exports }) => { ${raw}; return module.exports })()`)

// If we need to stripe out some private fields
const clientConfig = config

module.exports = {
  config,
  clientConfig
}
