import CreateOrderService from '@modules/orders/services/CreateOrderService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class OrdersController {
  // public async index(request: Request, response: Response): Promise<Response> {
  //   const listOrders = new ListOrdersService();

  //   const orders = await listOrders.execute();

  //   return response.status(200).json(orders);
  // }

  // public async show(request: Request, response: Response): Promise<Response> {
  //   const { id } = request.params;

  //   const showOrders = new ShowOrderService();

  //   const order = await showOrders.execute({ id });

  //   return response.json(order);
  // }

  public async create(request: Request, response: Response): Promise<Response> {
    const { addressMachine, juices, pickupDate, total } = request.body;

    const createOrder = container.resolve(CreateOrderService);

    const order = await createOrder.execute({
      addressMachine,
      juices,
      pickupDate,
      total,
    });

    return response.status(200).json(order);
  }
}
