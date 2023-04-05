import {Configuration, OpenAIApi, ChatCompletionRequestMessage} from "openai"


type Message = {
    role: string,
    content: string
}

export async function POST(request: Request)
{   
    const body = await request.json()


      const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      });

      let convo = [
        {
            role: "system",
            content: "You are a virtual assistant for content creation. You will be provided with some pointers based on which you need to create a blog article body."
        },
        {
            role: "user",
            content: `Create a blog article for me based on these parameters: 
            - Topic: ${body.title}
            - Category: ${body.category}
            ${body.prompt}`
        }
       
      ]

      const openai = new OpenAIApi(configuration);
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: convo as ChatCompletionRequestMessage[],
      });
      
      return new Response(JSON.stringify((completion.data.choices[0].message)))

}