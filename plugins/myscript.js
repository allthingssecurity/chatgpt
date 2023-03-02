
	let parentMessageId = null;
let conversationId = null;
//alert("entered")
        async function getText() {
			// Select the div element by its class name
			
			
			
 // const contentDiv = document.querySelector('s-prose js-post-body');

// Select the .question element
// Select the .question element
const question = document.querySelector('.question');

//questions.forEach((question) => {

var qu;
// Get the innerHTML of the .question element
const questionHTML = question.innerHTML;


		



//console.log(questionHTML);
// Define a regular expression to match the content between <div class="abc"> and </div>
const regex = /<div class="s-prose js-post-body" itemprop="text">([\s\S]*?)<\/div>/;

// Use the regular expression to extract the content between the <div> tags with class "abc"
const match = regex.exec(questionHTML);

// If a match was found, log the captured content to the console
if (match) {
console.log("match found")
  console.log(match[1]);
  qu=match[1];
}

const response = await fetch("http://localhost:3000/send-message", {
                method: "POST",
                body: JSON.stringify({ message: "here is a stackoverflow question. answer it "+qu,parentMessageId:parentMessageId,conversationId:conversationId }),
                headers: { "Content-Type": "application/json" },
            });
			
            const json = await response.json();
            //var res=JSON.stringify(json)
			//alert(JSON.stringify(json))
			const text = json.response;
			
			const greeting = text;


// Get the ra HTML content of the div tag using your regular expression
const rawHtml = /<div class="s-prose js-post-body" itemprop="text">([\s\S]*?)<\/div>/.exec(document.body.innerHTML)[1];

// Modify the raw HTML content by appending some text to it
//const modifiedHtml =  '<p>+'+greeting+'</p>';
const modifiedHtml =  greeting;

// Create a new div element to hold the modified content
const div = document.createElement('div');
div.style.backgroundColor = 'cyan';
//div.innerHTML = modifiedHtml;

// Update the HTML character by character
for (let i = 0; i < modifiedHtml.length; i++) {
  setTimeout(() => {
    div.innerHTML += modifiedHtml[i];
  }, i * 20); // Delay each character by 100ms
}

// Insert the modified content back into the DOM
const questionDiv = document.querySelector('.question');
questionDiv.parentNode.insertBefore(div, questionDiv.nextSibling);
//});

//console.log(questionContent);

  //console.log(contentDiv);



// Extract the text content of the div element
//const content = contentDiv.innerText;
//console.log(content);

			//const contentDiv = document.querySelector('div.s-prose.js-post-body[itemprop="text"]');
			//const content = contentDiv.innerText;
			//alert(contentDiv);

            
            	
			
//			const label = document.createElement('label');




			//alert(greeting)
//const header = document.createElement("h1");
//header.textContent = greeting;
//document.body.insertBefore(header, document.body.firstChild);
			//alert(res);
			//alert(json.response);
			parentMessageId=json.id;
			conversationId=json.conversationId;
			
        }

	getText();




