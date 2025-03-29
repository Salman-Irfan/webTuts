import { User } from "../../../../models/UserModel.js"
import bcrypt from "bcrypt";
import dotenv from "dotenv"
import { Token } from "../../../../models/TokenModel.js";
import crypto from "crypto";
import { sendEmail } from "../../../../utils/sendEmail.js";
dotenv.config()

export const userSignUpController = async (req, res) => {
    const { name, email, password } = req.body
    const existingUser = await User.findOne({ email: email })
    
    if (existingUser) {
        return res.json({
            success: true,
            message: `user with this email ${email} already exists`,
            toastNotification: false
        })
    }
    // hashing the password
    const slatRounds = process.env.SALT_ROUNDS
    console.log(typeof(+slatRounds))
    
    const salt = bcrypt.genSaltSync(+slatRounds);
    const hashedPassword = await bcrypt.hashSync(password, salt);
    const user = new User({
        name,
        email,
        password: hashedPassword
    })
    
    const addedUser = await user.save()

    // sending email
    // saving the new token
    const token = await new Token({
        userId: user._id,
        token: crypto.randomBytes(32).toString("hex")
    }).save();
    // making url
    // making url
    const url = `${process.env.NODE_BASE_URL}${process.env.APIV1}/users/${user._id}/verify/${token.token}`
    // sending email
    await sendEmail(user.email, 'Verify Email', url);
    try {
        return res.json({
            success: true,
            message: "User signed up successfully!",
            data: addedUser,
            toastNotification: true
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            error: error
        })
    }
}