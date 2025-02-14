import express from 'express';
import { getDailySalesController } from '../../../../controllers/adminControllers/getDailySalesController.js';

export const adminRouter = express.Router();

adminRouter.get(`daily-sales`, getDailySalesController)