import express from 'express';
const app = express();

app.get('/api/ping', (_req, res) => {
  res.json({ message: 'pong 🏓' });
});

app.listen(3000, () => console.log('API running on http://localhost:3000'));