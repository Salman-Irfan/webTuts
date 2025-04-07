import express from 'express';
import { getDailySalesController } from '../../../../controllers/apiControllers/v1Controllers/adminControllers/getDailySalesController.js';
import { addGroceryItemController } from '../../../../controllers/apiControllers/v1Controllers/adminControllers/addGroceryItemController.js';
import { getAllGroceryItemController } from '../../../../controllers/apiControllers/v1Controllers/adminControllers/getAllGroceryItemController.js';
import { getItemByIdController } from '../../../../controllers/apiControllers/v1Controllers/adminControllers/getItemByIdController.js';
import { deleteItemByIdController } from '../../../../controllers/apiControllers/v1Controllers/adminControllers/deleteItemByIdController.js';
import { updateItemByIdController } from '../../../../controllers/apiControllers/v1Controllers/adminControllers/updateItemByIdController.js';
import { body } from 'express-validator';
import { validGroceryRequest, validateGroceryRequest } from '../../../../middlewares/reqMiddlewares/groceryReqMiddleware.js';
import { multipartyMiddleware } from '../../../../middlewares/fileUploadMiddlewares/fileUploadMiddleWare.js';



export const adminRouter = express.Router();

adminRouter.get(`/daily-sales`, getDailySalesController)
adminRouter.post(`/add-grocery-item`,
    // validGroceryRequest,
    // validateGroceryRequest,
    multipartyMiddleware,
    addGroceryItemController
)
adminRouter.get(`/all-grocery-items`, getAllGroceryItemController)
adminRouter.get(`/product/:id`, getItemByIdController)
adminRouter.delete(`/delete-product/:id`, deleteItemByIdController)
adminRouter.put(`/update-product/:id`, updateItemByIdController)
