import { Schema,model } from "mongoose";

const creditSchema = new Schema(
    {
        deudaTotal:{type: Number},
        deudaRestante:{type: Number},
        fechaCredito:{type: Date},
        state: {type: String, default:'E'},
        idClient: {type: Schema.Types.ObjectId, ref:'Client'},
        cuots: [{
            amount: {type: Number},
            fecha:{type: Date}
        }]
    },
);

export default model('Credit', creditSchema);