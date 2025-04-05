import { body, validationResult } from "express-validator";

export const validUserRequest = [
    body('name', 'Enter a valid name (at least 3 characters)').isLength({ min: 3 }),
    body('email', 'Email should be in proper format').isEmail(),
];

export const validateUserRequest = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }
    next();
};