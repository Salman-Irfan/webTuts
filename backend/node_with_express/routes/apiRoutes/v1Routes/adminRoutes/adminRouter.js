import express from 'express';
import { getDailySalesController } from '../../../../controllers/v1Controllers/adminControllers/getDailySalesController.js';
import { addGroceryItemController } from '../../../../controllers/v1Controllers/adminControllers/addGroceryItemController.js';


export const adminRouter = express.Router();

adminRouter.get(`/daily-sales`, getDailySalesController)
adminRouter.post(`/add-grocery-item`, addGroceryItemController)