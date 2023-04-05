import { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  // Check if the request method is POST
  if (req.method === 'POST') {
    try {
      const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      });
      const openai = new OpenAIApi(configuration);

      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt:
          'Create an outline for an essay about Nikola Tesla and his contributions to technology:',
        temperature: 0.3,
        max_tokens: 150,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      });

      // Return the response from OpenAI API as JSON
      res.status(200).json({ response });
    } catch (error) {
      // Handle error
      res.status(500).json({ error: 'Failed to fetch data' });
    }
  } else {
    // Return error for unsupported methods
    res.status(405).json({ error: 'Method not allowed' });
  }
}
