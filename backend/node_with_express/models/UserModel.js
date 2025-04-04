import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String, // String is shorthand for {type: String}
    email: String, // String is shorthand for {type: String}
    password: String,
    isVerified: {
        type: Boolean,
        default: false
    }
});

export const User = mongoose.model('users', userSchema);