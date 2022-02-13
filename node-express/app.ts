import express from 'express';
import health from './routes/health';
import api from './routes/api';
import cors from 'cors';

const app = express();
const port = 5050;
app.use(cors());


app.use('/', health);
app.use('/api', api);

app.listen(port, () => {
  console.log(`The application is listening on ${port}.`);
});