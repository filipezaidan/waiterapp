import { Router } from 'express';

import multer, { diskStorage } from 'multer';
import path from 'node:path';

import { createCategory } from './app/useCases/categories/createCategory';
import { deleteCategoryById } from './app/useCases/categories/deleteCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { changeStatusOrderById } from './app/useCases/orders/changeStatusOrderById';
import { createOrder } from './app/useCases/orders/createOrder';
import { deleteOrderById } from './app/useCases/orders/deleteOrderById';
import { listOrders } from './app/useCases/orders/listOrders';
import { createProduct } from './app/useCases/products/createProduct';
import { getProductsByCategory } from './app/useCases/products/getProductsByCategory';
import { listProducts } from './app/useCases/products/listProducts';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      console.log('file:', file);
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

// Categories
router.get('/categories', listCategories);
router.post('/categories', createCategory);
router.delete('/categories/:categoryId', deleteCategoryById);
// Products
router.get('/products', listProducts);
router.post('/products', upload.single('image'), createProduct);
router.get('/categories/:categoryId/products', getProductsByCategory);
// Orders
router.get('/orders', listOrders);
router.post('/orders', createOrder);
router.patch('/orders/:orderId', changeStatusOrderById);
router.delete('/orders/:orderId', deleteOrderById);
