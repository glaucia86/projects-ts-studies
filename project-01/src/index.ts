/**
 * file: src/index.ts
 * description:
 * date: 10/02/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import express, { Application } from 'express';

const PORT = process.env.PORT || 7000;

const app: Application = express();

app.get("/ping", async (_req, res) => {
  res.send({
    message: "pong",
  });
});

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});