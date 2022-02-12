import express from 'express';
import health from './routes/health';
const app = express();
const port = 3000;

app.use('/', health)

app.listen(port, () => {
  console.log(`The application is listening on ${port}.`);
});