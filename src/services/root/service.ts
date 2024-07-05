import express from 'express';

const rootRouter = express.Router();

rootRouter.get('/', (_req, res) => {
  res.status(200).json({ message: 'Hello World' });
});

export default rootRouter;

