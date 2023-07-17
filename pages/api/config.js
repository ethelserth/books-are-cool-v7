import { clientConfig } from '@/lib/server/config'

import path from 'path'
import fs from 'fs'

const BGP5 = fs.readFileSync(path.join(process.cwd(), 'blog.config.js'), 'utf-8')

export default function handler (req, res) {
  if (req.method === 'GET') {
    res.status(200).json(clientConfig)
  } else {
    res.status(204).end()
  }
}
