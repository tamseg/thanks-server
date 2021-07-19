const {createServer} = require('http');
function onRequest(erq, res) {
    res.end('Thanks');
}
const serverInstance = createServer(onRequest);
serverInstance.listen(4000 , () => {
    console.log('The server is up!');
});