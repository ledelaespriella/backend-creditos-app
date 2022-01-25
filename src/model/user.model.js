import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  names: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String },
  password: { type: String },
  identificacion: { type: Number },
  typeId: { type: String },
  dateExp: { type: Date, required: true },
  incomes: { type: Number, required: true },
  expenses: { type: Number, required: true },
  rol: { type: String, default: 'CLIENT' },
  state: { type: Boolean, default: true },
  valorDisponible: { type: Number },
  creditos: [
    {
      idCredito: { type: Schema.Types.ObjectId, ref: 'Credit' },
      cuotas: [
        {
          noCuota:{type: Number},
          valorCapital: { type: Number },
          deudaTotal: { type: Number },
          valorInteres: { type: Number },
          valorCuota: { type: Number },
        },
      ],
      state: { type: String }
    },
  ],
  prorrogas: [
    {
      idCredito: { type: Schema.Types.ObjectId, ref: 'Credit' },
      motivos: { type: String },
      cuotasAplazar: { type: Number, default: 6 },
      state: { type: String }
    }
  ]
});

export default model('User', UserSchema);