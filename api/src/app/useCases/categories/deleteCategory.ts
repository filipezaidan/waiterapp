import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export const deleteCategoryById = async (req: Request, res: Response) => {
  const { categoryId } = req.params;
  console.log(categoryId);
  const category = await Category.findById(categoryId);

  res.json(category);
  //   console.log(body);
};
