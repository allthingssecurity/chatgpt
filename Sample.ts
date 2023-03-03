
import { oraPromise } from 'ora'
import { spawn } from 'child_process'
import express from 'express'

import cors from 'cors'
const process = require("process")
require("dotenv").config()

import { ChatGPTAPIBrowser } from 'chatgpt'


process.on('uncaughtException', function (err) {
  console.error(err);
  console.log("Node NOT Exiting...");
});

function handle(signal) {
  console.log(`So the signal which I have Received is: ${signal}`);
  process.exit();
}
 
process.on('SIGINT', handle);


//process.on('SIGTERM', process.exit());
//dotenv.config()
var api;









//const api = new ChatGPTAPI({ apiKey: process.env.OPENAI_API_KEY })


  const app = express()
  
  const port = process.env.PORT || 3000
  app.use(cors())
  app.use(express.json())
	var convers;
	var parent;
  app.post('/send-message', async (req, res) => {
		
    const { message, conversationId, parentMessageId } = req.body
	console.log(req.body)
	
	//let prompt="Generate ABAP code for the text :"+message
	let prompt=message;
	
	try
	{
	let response = await oraPromise(
    api.sendMessage(prompt, {
      conversationId: convers,
      parentMessageId: parent
    }),
    {
      text: prompt
    }
  )
  console.log("getting response from openai="+ JSON.stringify(response));
  convers=response.conversationId;
  console.log("conversation id"+convers);
  parent=response.messageId;
  console.log("message  id"+parent);
  
 
 


 	
 


 
 
 
 
 
 
 

	
    res.send(response)
	}
	catch (err) {
    console.error(err);
    res.status(500).send({ error: 'Error ' });
  }

	
   
  });

  app.listen(port, () => {
  api = new ChatGPTAPIBrowser({
    email: process.env.EMAIL,
    password: process.env.PASSWORD
})
try {
        api.initSession()
    } catch (error: any) {
        console.error("[ Failed to authenticate with the ChatGPT API: " + error.message)
        process.exit(1)
    }
    console.log(`Server is running at http://localhost:${port}`)
  });

