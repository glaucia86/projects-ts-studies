/**
 * file: src/main/config/app.ts
 * description:
 * date: 10/02/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import express, { Application } from 'express';

const app: Application = express();

// ==> import routes
import indexDefault from '../routes/index';

app.use(indexDefault);
// app.use('api/v1/', indexRoutes);

export default app;

