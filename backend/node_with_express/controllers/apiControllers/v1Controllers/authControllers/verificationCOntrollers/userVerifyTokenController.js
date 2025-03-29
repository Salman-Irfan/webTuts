import { Token } from "../../../../../models/TokenModel.js";
import { User } from "../../../../../models/UserModel.js";

export const userVerifyTokenController = async (req, res) => {
    try {
        const { userId, token } = req.params
        const user = await User.findOne({ _id: req.params.userId });
        // if user is not found return false

        // software enginering, point of early returns
        // if user is not found return false
        if (!user) {
            return res.json({
                message: 'Invalid Link',
            });
        }
        const verificationToken = await Token.findOne({
            userId: user._id,
            token: req.params.token,
        });

        // if token is not found return false
        if (!verificationToken) {
            return res.json({
                message: 'Invalid Token',
            });
        }
        // if user and token matches
        // if success, update the verified field of user
        await User.updateOne(
            { _id: user._id },
            { $set: { verified: true } }
        );

        // Remove the token from the database
        await Token.deleteOne({ _id: verificationToken._id });

        return res.json({
            success: true,
            message: 'Email verified successfully',
        });
    } catch (error) {
        console.log(error)
        return res.json({
            success: false,
            error: error
        })
    }
}