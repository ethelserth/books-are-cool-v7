const fs = require('fs')
const path = require('path')

const PATH = path.resolve(process.cwd(), 'blog.config.js');

const raw = fs.readFileSync(PATH, 'utf-8')
const config = eval(`((module = { exports }) => { ${raw}; return module.exports })()`)

// If we need to stripe out some private fields
const clientConfig = config

module.exports = {
  config,
  clientConfig
}
