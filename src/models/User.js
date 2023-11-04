import mongoose from 'mongoose'

const {Schema} = mongoose

const userSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required
    },
    email: {
        type: String,
        unique: true,
        required
    },
    password: {
        type: String,
        required
    },
},
  {timestamps: true}
)

export default mongoose.model("User", userSchema)