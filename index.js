import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware (e.g., for parsing JSON)
app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
