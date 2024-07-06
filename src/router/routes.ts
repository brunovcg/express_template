import { Router } from 'express';
import rootRouter from '../services/root/controller';

export const appRoutes = Router();

appRoutes.use('/', rootRouter);

