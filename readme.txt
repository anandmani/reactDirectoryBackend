command to run: SET DEBUG=reactDirectoryBackend:* & npm start.

There is no hot reload. Keep re-running above command to see changes.

console.log gets logged in terminal.

Just look at routes>index.js, dont have to mess with the rest.

Tutorial at: https://www.youtube.com/watch?v=FqMIyTH9wSg  Node.js tutorial for beginners 2014 - an introduction to Node.js with Express.js

Running on port 9000. Look at bin>www file

For allowing CORS, we need to add Access-Control-Allow-Origin and a bunch of other headers to the response sent. router.use is applied to all request (get, post,etc.). When we make a call CORS call with browsers, first an OPTIONS (preflight ) call is made before POST/GET

When passing a payload in front-end, always JSON stringify the javascript object! javascript objects are not the same as JSON. Failure to do so may incorrectly show CORS failure
