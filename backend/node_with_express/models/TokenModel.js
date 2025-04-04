import {mongoose} from "mongoose"

const {Schema} = mongoose

const TokenSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "users",
        unique: true
    },
    token: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: 3600 // 1 hour
    }
})
export const Token = mongoose.model("tokens", TokenSchema)