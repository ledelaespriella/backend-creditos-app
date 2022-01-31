import { Schema, model, ObjectId } from 'mongoose';

const AdminSchema = new Schema({
  names: { type: String, required: true },
  lastName: { type: String, required: true },
  Id: {type: Number, required: true},
  email: { type: String },
  password: { type: String },
  rol: { type: String, default: 'admin' }, 
  //Creo que las designaciones de los roles deben ser mas cortas
  //y estar en lowercase, como final, interno y admin
  state: { type: Boolean, default: true },
  CreditosAprobados: [
    {
      idCreditos: { type: ObjectId, ref: 'Credit' },
      state: { type: Boolean },
    },
  ],
  CreditosRechazados: [
    {
      idCreditos: { type: ObjectId, ref: 'Credit' },
      state: { type: Boolean },
    },
  ],
});

export default model('Admin', AdminSchema);
