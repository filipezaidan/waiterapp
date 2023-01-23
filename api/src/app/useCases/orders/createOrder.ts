import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export const createOrder = async (req: Request, res: Response) => {
  //   const {} = req.body;

  const order = await Order.create({});
  res.json(order);
};
