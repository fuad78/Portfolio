const http = require('http');

// Define the port number
const PORT = 3000;

// Create a server
const server = http.createServer((req, res) => {
    res.statusCode = 200; // Set HTTP status code
    res.setHeader('Content-Type', 'text/plain'); // Set response header
    res.end('Hello, World!\n'); // Send response
});

// Start the server and listen on the defined port
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});
