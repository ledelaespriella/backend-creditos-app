import { Schema, model, ObjectId } from 'mongoose';

const UserSchema = new Schema({
    names: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String },
    password: { type: String },
    rol: { type: String, default: 'USUARIOINTERNO' },
    state: { type: Boolean, default: true },
    CreditosAprobados: [
        {
            idCreditos: { type: ObjectId, ref: 'Credit' },
            state: { type: Boolean }
        }
    ],
    CreditosRechazados: [
        {
            idCreditos: { type: ObjectId, ref: 'Credit' },
            state: { type: Boolean }
        }
    ]
});


export default model('Credit', creditSchema);