import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    user: {
        username: String,
        email: String,
        password: String,
        provider: String
    },
    pdf: String
})

export const User = mongoose?.models.users || mongoose.model("users", userSchema)