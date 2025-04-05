import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String, // String is shorthand for {type: String}
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true, // ensures it's stored in lowercase
        trim: true
    }, // String is shorthand for {type: String}
    password: String,
    isVerified: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

export const User = mongoose.model('users', userSchema);