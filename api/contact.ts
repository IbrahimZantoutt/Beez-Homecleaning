import type { VercelRequest, VercelResponse } from '@vercel/node'
import { neon } from '@neondatabase/serverless'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, phone, email, service, message } = req.body ?? {}

  if (!name || !phone) {
    return res.status(400).json({ error: 'Name and phone are required' })
  }

  if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL is not set')
    return res.status(500).json({ error: 'Database not configured' })
  }

  try {
    const sql = neon(process.env.DATABASE_URL)

    // Create table if not exists
    await sql`
      CREATE TABLE IF NOT EXISTS contact_submissions (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        phone VARCHAR(100) NOT NULL,
        email VARCHAR(255),
        service VARCHAR(255),
        message TEXT,
        created_at TIMESTAMPTZ DEFAULT NOW()
      )
    `

    // Insert submission
    await sql`
      INSERT INTO contact_submissions (name, phone, email, service, message)
      VALUES (${name}, ${phone}, ${email ?? null}, ${service ?? null}, ${message ?? null})
    `

    return res.status(200).json({ success: true, message: 'Submission received' })
  } catch (err) {
    console.error('Database error:', err)
    return res.status(500).json({ error: 'Failed to save submission' })
  }
}
