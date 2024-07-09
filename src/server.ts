import 'express-async-errors';
import express from 'express';
import { appRoutes } from './router/routes';
import AppError from './errors/appError';

const app = express();
app.use(express.json());
app.use(appRoutes);
app.use(AppError.useAppError);

app.listen(3333, () => {
  console.log('listening port 3333');
});

