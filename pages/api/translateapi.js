import { TranslationServiceClient } from '@google-cloud/translate';


const translationClient = new TranslationServiceClient();


const projectId = process.env.GOOGLE_PROJECT_ID || 'translations-466100';
const location = 'global';

export default async function handler(req, res) {

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { text, sourceLanguage, targetLanguage } = req.body;

    // Validación básica
    if (!text || !targetLanguage) {
      return res.status(400).json({ 
        error: 'Text and targetLanguage are required' 
      });
    }

   
    const request = {
      parent: `projects/${projectId}/locations/${location}`,
      contents: [text],
      mimeType: 'text/plain',
      sourceLanguageCode: sourceLanguage || '', 
      targetLanguageCode: targetLanguage,
    };


    const [response] = await translationClient.translateText(request);

    res.status(200).json({
      originalText: text,
      translatedText: response.translations[0].translatedText,
      detectedLanguage: response.translations[0].detectedLanguageCode,
    });

  } catch (error) {
    console.error('Translation error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      details: error.message 
    });
  }
}