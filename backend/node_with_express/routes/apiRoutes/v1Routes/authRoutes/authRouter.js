import express from 'express';
import { userSignUpController } from '../../../../controllers/apiControllers/v1Controllers/authControllers/userSignUpController.js';
import { userLoginController } from '../../../../controllers/apiControllers/v1Controllers/authControllers/userLoginController.js';
import { validUserRequest, validateUserRequest } from '../../../../middlewares/reqMiddlewares/signUpReqMiddleware.js';

export const authRouter = express.Router();

authRouter.post(`/signup`, validUserRequest, validateUserRequest, userSignUpController)
authRouter.post(`/login`, userLoginController)