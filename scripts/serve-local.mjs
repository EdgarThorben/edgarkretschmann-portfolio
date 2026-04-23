/**
 * Serves the local HTTrack-scraped Edgar sites on localhost ports.
 * Run from the project root: node scripts/serve-local.mjs
 *
 * Ports:
 *   3010 → edgarkretschmann.com        (main site)
 *   3011 → bio.edgarkretschmann.com
 *   3012 → portfolio.edgarkretschmann.com
 *   3013 → projects.edgarkretschmann.com
 */

import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { join, extname, dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dir = dirname(fileURLToPath(import.meta.url))
const SITES_ROOT = resolve(__dir, '../../Sites')

const SITES = [
  { name: 'edgarkretschmann.com',        root: join(SITES_ROOT, 'Sites', 'edgarkretschmann.com'),        port: 3010 },
  { name: 'bio.edgarkretschmann.com',    root: join(SITES_ROOT, 'ap',    'bio.edgarkretschmann.com'),    port: 3011 },
  { name: 'portfolio.edgarkretschmann.com', root: join(SITES_ROOT, 'ap', 'portfolio.edgarkretschmann.com'), port: 3012 },
  { name: 'projects.edgarkretschmann.com',  root: join(SITES_ROOT, 'ap', 'projects.edgarkretschmann.com'),  port: 3013 },
]

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css':  'text/css',
  '.js':   'application/javascript',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif':  'image/gif',
  '.svg':  'image/svg+xml',
  '.webp': 'image/webp',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
  '.mp4':  'video/mp4',
  '.webm': 'video/webm',
}

function createStaticServer(root) {
  return createServer(async (req, res) => {
    let urlPath = decodeURIComponent(req.url.split('?')[0])
    if (urlPath === '/') urlPath = '/index.html'

    const filePath = join(root, urlPath)

    // prevent path traversal
    if (!filePath.startsWith(root)) {
      res.writeHead(403); res.end('Forbidden'); return
    }

    try {
      const info = await stat(filePath)
      if (info.isDirectory()) {
        const indexPath = join(filePath, 'index.html')
        const data = await readFile(indexPath)
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
        res.end(data)
        return
      }
      const ext = extname(filePath).toLowerCase()
      const mime = MIME[ext] ?? 'application/octet-stream'
      const data = await readFile(filePath)
      res.writeHead(200, { 'Content-Type': mime })
      res.end(data)
    } catch {
      res.writeHead(404, { 'Content-Type': 'text/plain' })
      res.end(`404 — ${urlPath}`)
    }
  })
}

console.log('\n🌐  Edgar local site servers starting...\n')

for (const site of SITES) {
  const server = createStaticServer(site.root)
  server.listen(site.port, '127.0.0.1', () => {
    console.log(`  http://localhost:${site.port}  →  ${site.name}`)
    console.log(`  (files from ${site.root})\n`)
  })
  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`  ⚠  Port ${site.port} already in use — ${site.name} skipped`)
    } else {
      console.error(`  ✕  ${site.name}: ${err.message}`)
    }
  })
}

console.log('Press Ctrl+C to stop all servers.\n')
