import express from 'express';
import { userSignUpController } from '../../../../controllers/apiControllers/v1Controllers/authControllers/userSignUpController.js';
import { userLoginController } from '../../../../controllers/apiControllers/v1Controllers/authControllers/userLoginController.js';

export const authRouter = express.Router();

authRouter.post(`/signup`, userSignUpController)
authRouter.post(`/login`, userLoginController)