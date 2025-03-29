import express from 'express';
import { userVerifyTokenController } from '../../../../controllers/apiControllers/v1Controllers/authControllers/verificationCOntrollers/userVerifyTokenController.js';
export const usersRouter = express.Router();

usersRouter.get(`/:userId/verify/:token`, userVerifyTokenController)