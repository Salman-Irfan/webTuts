import { User } from "../../../../models/UserModel.js"
import bcrypt from "bcrypt";
import dotenv from "dotenv"
dotenv.config()

export const userSignUpController = async (req, res) => {
    const { name, email, password } = req.body
    const existingUser = await User.findOne({ email: email })
    
    if (existingUser) {
        return res.json({
            success: true,
            message: `user with this email ${email} already exists`
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
    try {
        return res.json({
            success: true,
            data: addedUser
        })
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            error: error
        })
    }
}