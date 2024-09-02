import ordersRouter from '@modules/orders/http/routes/orders.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/orders', ordersRouter);

export default routes;
