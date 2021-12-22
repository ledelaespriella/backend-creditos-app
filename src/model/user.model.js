import { Schema, model, ObjectId } from 'mongoose';

const UserSchema = new Schema({
  names: { type: String, required: true }, 
  lastName: { type: String, required: true }, 
  email: { type: String },
  password: { type: String },
  id:{ type: Number},
  typeId: { type: String },
  dateExp: { type: Date, required: true},
  rol: { type: String, default: 'CLIENT' },
  state: { type: Boolean, default: true },
});

export default model('User', UserSchema);