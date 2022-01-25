import { Schema, model} from "mongoose";

const creditSchema = new Schema(
    {
        tipo: { type: String , default:"Leasing" },
        valor: { type: Number, required: true },
        tiempo: { type: Number, required: true },
        tasa: { type: Number, required: true },
        idUser: { type: Schema.Types.ObjectId, ref: 'User' },
        state: { type: String, default: "Pendiente" },
    },
);

export default model('Credit', creditSchema);