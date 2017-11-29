// Dependencies
const express = require('express');
const http = require('http');
const app = express();

// API routes
const api = require('./routes/api');

// css and javascript files in public folder
app.use(express.static('public'));

// Routes
app.use('/api/v1', api);
app.use('/api/', api);
app.use('/', api);

// View rendering
app.set('view engine', 'pug');

// Create server
const server = http.createServer(app);
const port = process.env.PORT || '3000';
app.set('port', port);
server.listen(port, () => console.log(`API running on localhost:${port}`));
