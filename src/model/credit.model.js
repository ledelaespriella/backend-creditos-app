import { Schema, model, ObjectId } from "mongoose";

const creditSchema = new Schema(
    {
        tipo: { type: String },
        valor: { type: Number, required: true },
        tiempo: { type: Number, required: true },
        tasa: { type: Number, required: true },
        state: { type: Boolean, default: true },
        Solicitudes: { type: Number },
        CreditosAprobados: [
            {
                idUser: { type: ObjectId, ref: 'User' },
                state: { type: Boolean }
            }
        ],
        CreditosRechazados: [
            {
                idUser: { type: ObjectId, ref: 'User' },
                state: { type: Boolean }
            }
        ]
    },
);

export default model('Credit', creditSchema);