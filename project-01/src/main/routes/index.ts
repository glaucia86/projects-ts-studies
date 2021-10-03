/**
 * file: src/main/routes/index.ts
 * description:
 * date: 10/02/2021
 * author: Glaucia Lemos <Twitter: @glaucia_lemos86>
 */

import express from 'express'

const router = express.Router();

// ==> Default Route: localhost:3000/api/v1
router.get('/api/v1', (req, res) => {
  res.status(200).send({
    success: true,
    message: 'Welcome to the API TypeScript + Express + Azure!',
    version: '1.0.0'
  })
});

export default router;