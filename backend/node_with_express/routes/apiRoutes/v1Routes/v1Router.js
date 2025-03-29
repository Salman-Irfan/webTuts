import express from 'express';

import { adminRouter } from './adminRoutes/adminRouter.js';
import { authRouter } from './authRoutes/authRouter.js';
import { usersRouter } from './usersRoutes/userRouter.js';
export const v1Router = express.Router();

v1Router.use(`/auth`, authRouter)
v1Router.use(`/admin`, adminRouter)
v1Router.use(`/users`, usersRouter)
// v1Router.use(`/seller`, sellerRouter)
// v1Router.use(`/buyer`, buyerRouter)
// v1Router.use(`/guest`, guestRouter)

// v1Router.get(`/`, homeController)
// v1Router.get(`/about`, aboutController)