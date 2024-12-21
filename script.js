const ws = new WebSocket('ws://localhost:8081');

ws.onopen = () => {
    console.log('Connected to server');
};

ws.onmessage = (event) => {
    const messages = document.getElementById('messages');
    const newMessage = document.createElement('div');
    newMessage.textContent = `Server: ${event.data}`;
    messages.appendChild(newMessage);
};

ws.onclose = () => {
    console.log('Disconnected from server. Reconnecting...');
    setTimeout(() => {
        ws = new WebSocket('ws://localhost:8081');
    }, 1000);
};

document.getElementById('send').addEventListener('click', () => {
    const input = document.getElementById('message');
    ws.send(input.value);
    input.value = '';
});