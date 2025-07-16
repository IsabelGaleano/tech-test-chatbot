// pages/api/chat.js
import { Client } from '@elastic/elasticsearch';
import { TranslationServiceClient } from '@google-cloud/translate';

const elasticClient = new Client({
  node: process.env.ELASTIC_CLOUD_URL,
  auth: { apiKey: process.env.ELASTIC_API_KEY },
  serverless: true,
});

const translationClient = new TranslationServiceClient();
const projectId = process.env.GOOGLE_PROJECT_ID || 'translations-466100';
const location = 'global';
const parent = `projects/${projectId}/locations/${location}`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Only POST is allowed' });
  }

  const { question } = req.body;
  if (!question) {
    return res.status(400).json({ error: 'The question is missing' });
  }

  try {

    const translationRequest = {
      parent,
      contents: [question],
      mimeType: 'text/plain',
      targetLanguageCode: 'es',
    };

    const [translated] = await translationClient.translateText(translationRequest);
    const detectedLang = translated.translations[0].detectedLanguageCode;
    const translatedQuestion = translated.translations[0].translatedText;


    const result = await elasticClient.search({
      index: 'coffee-cats-faq',
      query: {
        multi_match: {
          query: translatedQuestion,
          fields: ['question^2', 'answer'],
          fuzziness: 'AUTO',
          type: 'most_fields',
        },
      },
    });

    let answer = 'Lo siento, no encontré una respuesta.';
    if (result.hits.hits.length > 0) {
      answer = result.hits.hits[0]._source.answer;
    }

    const backTranslationRequest = {
      parent,
      contents: [answer],
      mimeType: 'text/plain',
      targetLanguageCode: detectedLang,
    };

    const [translatedBack] = await translationClient.translateText(backTranslationRequest);
    const finalAnswer = translatedBack.translations[0].translatedText;

    return res.status(200).json({ answer: finalAnswer });
  } catch (error) {
    console.error('Chatbot error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}