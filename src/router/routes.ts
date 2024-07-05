import { Router } from 'express';
import rootRouter from '../services/root/service';

export const appRoutes = Router();

appRoutes.use('/', rootRouter);

