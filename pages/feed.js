import { getAllPosts } from '@/lib/notion'
import { generateRss } from '@/lib/rss'

import path from 'path'
import fs from 'fs'

export async function getServerSideProps ({ res }) {

  const BGP2 = fs.readFileSync(path.join(process.cwd(), 'blog.config.js'), 'utf-8')

  res.setHeader('Content-Type', 'text/xml')
  const posts = await getAllPosts({ includePages: false })
  const latestPosts = posts.slice(0, 10)
  const xmlFeed = await generateRss(latestPosts)
  res.write(xmlFeed)
  res.end()
  return {
    props: {}
  }
}
const feed = () => null
export default feed
