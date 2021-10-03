/**
 * file: src/server.ts
 * description:
 * date: 10/02/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import app from './config/app';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});