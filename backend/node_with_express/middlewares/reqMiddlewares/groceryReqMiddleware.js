import { body, validationResult } from "express-validator";

export const validGroceryRequest = [
    body('title', 'Enter a valid name (at least 3 characters)').isLength({ min: 3 }),
    body('description', 'description must be in between 5 to 10 words').isLength({min: 5, max: 10}),
];

export const validateGroceryRequest = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }
    next();
};