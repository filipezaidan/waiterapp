import { Request, Response } from 'express';
import { Order } from '../../models/Order';

export const listOrders = async (req: Request, res: Response) => {
  try {
    const orders = await Order.find();

    res.status(200).json(orders);
  } catch (err) {
    res.sendStatus(500);
  }
};
