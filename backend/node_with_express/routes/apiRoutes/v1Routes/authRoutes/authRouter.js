import express from 'express';
import { userSignUpController } from '../../../../controllers/apiControllers/v1Controllers/authControllers/userSignUpController.js';

export const authRouter = express.Router();

authRouter.post(`/signup`, userSignUpController)