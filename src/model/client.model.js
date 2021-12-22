import {Schema, model} from 'mongoose'

const clientSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String },
    password: { type: String },
    role: { type: String, default: 'CLIENT' },
    state: { type: Boolean, default: true },
});

export default model('Client', clientSchema);