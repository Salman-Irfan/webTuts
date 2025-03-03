import express from 'express';
import { getDailySalesController } from '../../../../controllers/apiControllers/v1Controllers/adminControllers/getDailySalesController.js';
import { addGroceryItemController } from '../../../../controllers/apiControllers/v1Controllers/adminControllers/addGroceryItemController.js';
import { getAllGroceryItemController } from '../../../../controllers/apiControllers/v1Controllers/adminControllers/getAllGroceryItemController.js';


export const adminRouter = express.Router();

adminRouter.get(`/daily-sales`, getDailySalesController)
adminRouter.post(`/add-grocery-item`, addGroceryItemController)
adminRouter.get(`/all-grocery-items`, getAllGroceryItemController)
