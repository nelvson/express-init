import express from 'express';

const app: express.Application = express();
const port = 4040;

const initiate = () => {
  app.listen({port}, () => {
    console.log(
      `🚀 Server ready at http://localhost:${port}`,
    );
  });

  app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200);
    res.send('hello there');
  });
}

initiate();
