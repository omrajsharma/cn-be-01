const http = require('http')
const axios = require('axios')
const port = 3000;

const server = http.createServer( async function(req, res) {
    console.log('req has arrived');


    const cnAPIResponse = await axios.get('https://api.codingninjas.com/api/v3/event_tags')


    res.setHeader('Content-Type', 'application/json')       // assignment
    res.end(JSON.stringify(cnAPIResponse.data.data))        // object to string
})

server.listen(port, 
    () => console.log(`server is listing on port :${port}`))