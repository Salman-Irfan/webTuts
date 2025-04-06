import { User } from "../../../../models/UserModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export const userLoginController = async (req, res) => {
    try {
        const { email, password, role } = req.body
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
        console.log(existingUser)
        if(!existingUser.isVerified){
            return res.json({
                success: true,
                message: `email ${email} not verified. please first verify your email and then come back to login`
            })
        }
        // check for user role, 

        const passwordCompare = await bcrypt.compareSync(password, existingUser.password);
        if (!passwordCompare) {
            return res.json({
                success: true,
                message: 'email or password is incorrect'
            });
        }
        // if both email and password are correct, assign token
        // check if requested role exists in the user's roles array
        if (!existingUser.roles.includes(role)) {
            return res.json({
                success: false,
                message: `Access denied. You are not registered as ${role}`
            });
        }

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