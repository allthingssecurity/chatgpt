# chatgpt
The Sample.ts file launches a browser which is then exposed over a REST interface. Including a plugin to showcase how one can interface with this REST endpoint.
Install all needed dependenices to launch the Sample.ts before using the command npx tsx Sample.ts
The .env file should contain the email and password for your open ai account.
Install the chatgpt module using this command 

npm install chatgpt

Install other needed dependencies like ora,dotenv


npm i ora

npm i dotnenv

npm i cors

Then launch the Server

npx tsx Sample.ts

Once this is done, you can install the plugin (I used brave browser. I guess chrome should be similar). If you navigate to a stackoverflow issue as an example
(https://stackoverflow.com/questions/42585210/extending-setuptools-extension-to-use-cmake-in-setup-py?noredirect=1&lq=1). The plugin should invoke the http API and send message
to chatgpt via the server interface.

You can find the stackoverflow plugin in the plugin directory.