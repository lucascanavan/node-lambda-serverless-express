import express from 'express';
import cookies from 'cookie-parser';

const app = express();

app.use(cookies());

app.get('*', async (req, res) => {
  return res.json({
    method: req.method,
    path: req.path,
    query: req.query,
    headers: req.headers,
    cookies: req.cookies
  });
});

export default app;
