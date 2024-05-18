import { Application, Request, Response } from 'express';
import express from 'express';

const app: Application = express();
// const port = 3000;

app.get('/', (req: Request, res: Response) => {
  const a = 10;
  // res.send('Hello World!')
  res.send(a);
});

export default app;
