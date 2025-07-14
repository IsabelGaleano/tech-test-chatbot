import { Client } from '@elastic/elasticsearch'

const client = new Client({
  node: process.env.ELASTIC_CLOUD_URL,
  auth: {
    apiKey: process.env.ELASTIC_API_KEY
  },
  serverless: true,
})

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST is allowed' })
  }

  const { question } = req.body

  if (!question) {
    return res.status(400).json({ error: 'The question is missing' })
  }

  try {
    const result = await client.search({
      index: 'chatbot-faq',
      query: {
        multi_match: {
          query: question,
          fields: ['question^2', 'answer'],
          fuzziness: 'AUTO',
          type: 'most_fields'
        }
      }
    })

    if (result.hits.hits.length > 0) {
      const topHit = result.hits.hits[0]
      const answer = topHit._source.answer
      return res.status(200).json({ answer })
    } else {
      return res.status(200).json({ answer: "Sorry, I didn't find an answer. Please try again." })
    }
  } catch (error) {
    console.error('Error in Elasticsearch:', error)
    return res.status(500).json({ error: 'Error searching in Elasticsearch' })
  }
}