import { User } from "../../../../models/UserModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export const userLoginController = async (req, res) => {
    try {
        const { email, password } = req.body
        // check if user exists, 
        const existingUser = await User.findOne({ email: email })
        // if user not found
        if (!existingUser) {
            return res.json({
                success: true,
                message: `email ${email} not found`
            })
        }
        // decrypt the password
        const passwordCompare = await bcrypt.compareSync(password, existingUser.password);
        if (!passwordCompare) {
            return res.json({
                success: true,
                message: 'email or password is incorrect'
            });
        }
        // if both email and password are correct, assign token
        const authtoken = jwt.sign({ email: existingUser.email }, process.env.JWT_SECRET);
        return res.json({
            success: true,
            user: existingUser,
            authtoken: authtoken
        })

    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            error: error
        })
    }
}