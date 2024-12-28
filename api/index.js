import express from 'express';
import { log } from 'node:console';

const app = express();

app.listen(3000, () => {
  console.log('Server is running on port 3000!');
});
