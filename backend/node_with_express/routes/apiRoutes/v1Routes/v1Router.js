import express from 'express';
import { homeController } from '../../../controllers/homeController.js';
import { aboutController } from '../../../controllers/aboutController.js';
import { adminRouter } from './adminRoutes/adminRouter.js';
export const v1Router = express.Router();

v1Router.use(`/admin`, adminRouter)
// v1Router.use(`/seller`, sellerRouter)
// v1Router.use(`/buyer`, buyerRouter)
// v1Router.use(`/guest`, guestRouter)

v1Router.get(`/`, homeController)
v1Router.get(`/about`, aboutController)