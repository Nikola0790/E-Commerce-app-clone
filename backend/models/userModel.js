import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
        name: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        isAdmin: {type: Boolean, default: false, required: true},
    }, {timestamps: true}// timestamp add two fields, createdAd and updatedAd.
);

const User = mongoose.model("User", userSchema);
export default User;
