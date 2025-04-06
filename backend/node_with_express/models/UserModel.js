import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: String,
    isVerified: {
        type: Boolean,
        default: false
    },
    roles: {
        type: [String],
        default: ['user'],
        enum: ['user', 'vendor', 'buyer', 'admin'] // Limit to known roles
    }
}, {
    timestamps: true
});

export const User = mongoose.model('users', userSchema);
