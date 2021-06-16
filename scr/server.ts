import express from "express";

const app = express();

app.get('/test', (request, response) => response.send('Hello NLW'));

app.post('/test/post', (request, response) => response.send('Hello NLW'))

app.listen(3000, () => console.log('Server is running'));
