import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import OrdersController from '../controllers/OrdersController';
import { JuiceFlavors } from '@shared/types';

const ordersRouter = Router();
const ordersController = new OrdersController();

// ordersRouter.get('/', ordersController.index);

// ordersRouter.get(
//   '/:id',
//   celebrate({
//     [Segments.PARAMS]: {
//       id: Joi.string().uuid().required(),
//     },
//   }),
//   ordersController.show,
// );

ordersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      addressMachine: Joi.number().required(),
      juices: Joi.array().items(
        Joi.object({
          id: Joi.string().optional(),
          type: Joi.string().required(),
          price: Joi.number().required(),
          amount: Joi.number().required(),
          total: Joi.string().required(),
          ice: Joi.boolean().optional(),
          sugar: Joi.boolean().optional(),
        }),
      ),
      pickupDate: Joi.string().required(),
      total: Joi.string().required(),
    },
  }),
  ordersController.create,
);

export default ordersRouter;
