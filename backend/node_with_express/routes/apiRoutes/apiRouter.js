import express from 'express';
import { v1Router } from './v1Routes/v1Router.js';
export const apiRouter = express.Router();

apiRouter.use(`/v1`, v1Router)

// apiRouter.get(`/v1/`, homeController)
// apiRouter.get(`/v1/about`, aboutController)

