import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export const listCategories = async (req: Request, res: Response) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};
