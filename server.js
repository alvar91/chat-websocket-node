const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 3000 });

server.on('connection', ws => {
    ws.send('Добро пожаловть в WebSocketChat');
});