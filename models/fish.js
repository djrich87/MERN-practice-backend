import mongoose from 'mongoose'

const Schema = mongoose.Schema

const fishSchema = new Schema({
name: {type: String, required: true},owner: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
breed: {type: String, default: 'Mixed'},
age: {type: Number, default: 0},
owner: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},

}, {
timestamps: true
})

const Fish = mongoose.model('Fish', fishSchema)


export {Fish}