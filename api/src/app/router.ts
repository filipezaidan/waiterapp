import { Router } from 'express';
import { createCategory } from './useCases/categories/createCategory';
import { listCategories } from './useCases/categories/listCategories';
import { changeStatusOrderById } from './useCases/orders/changeStatusOrderById';
import { createOrder } from './useCases/orders/createOrder';
import { deleteOrderById } from './useCases/orders/deleteOrderById';
import { listOrders } from './useCases/orders/listOrders';
import { createProduct } from './useCases/products/createProduct';
import { getProductsByCategory } from './useCases/products/getProductsByCategory';
import { listProducts } from './useCases/products/listProducts';

export const router = Router();

// Categories
router.get('/categories', listCategories);
router.post('/categories', createCategory);
// Products
router.get('/products', listProducts);
router.post('/products', createProduct);
router.get('/categories/:categoryId/products', getProductsByCategory);
// Orders
router.get('/orders', listOrders);
router.post('/orders', createOrder);
router.patch('/orders/:orderId', changeStatusOrderById);
router.delete('/orders/:orderId', deleteOrderById);
