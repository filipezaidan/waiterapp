import { Request, Response } from 'express';

export const createProduct = (req: Request, res: Response) => {
  try {
    console.log(req.body);
  } catch (err) {
    res.sendStatus(500);
  }
};
