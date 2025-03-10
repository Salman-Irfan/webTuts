import express from 'express';
import { getDailySalesController } from '../../../../controllers/apiControllers/v1Controllers/adminControllers/getDailySalesController.js';
import { addGroceryItemController } from '../../../../controllers/apiControllers/v1Controllers/adminControllers/addGroceryItemController.js';
import { getAllGroceryItemController } from '../../../../controllers/apiControllers/v1Controllers/adminControllers/getAllGroceryItemController.js';
import { getItemByIdController } from '../../../../controllers/apiControllers/v1Controllers/adminControllers/getItemByIdController.js';
import { deleteItemByIdController } from '../../../../controllers/apiControllers/v1Controllers/adminControllers/deleteItemByIdController.js';
import { updateItemByIdController } from '../../../../controllers/apiControllers/v1Controllers/adminControllers/updateItemByIdController.js';



export const adminRouter = express.Router();

adminRouter.get(`/daily-sales`, getDailySalesController)
adminRouter.post(`/add-grocery-item`, addGroceryItemController)
adminRouter.get(`/all-grocery-items`, getAllGroceryItemController)
adminRouter.get(`/product/:id`, getItemByIdController)
adminRouter.delete(`/delete-product/:id`, deleteItemByIdController)
adminRouter.put(`/update-product/:id`, updateItemByIdController)
