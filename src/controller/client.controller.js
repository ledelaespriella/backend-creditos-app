import ClientModel from './../model/client.model';
import { hashSync, compareSync } from 'bcrypt';
import { sign, decode } from 'jsonwebtoken';
import { createTransport } from 'nodemailer';

const register = async (req, res) => {
    try {
      const body = req.body;
      body.password = hashSync(body.password, 10);
      const user = new ClientModel(body);
      await user.save();
      return res.json({ status: true });
    } catch (e) {
      return res.json({ status: false, errors: e.message });
    }
};


const login = async (req, res) => {
  
    try {
      const body = req.body;
      console.log(body)
      const verify = await ClientModel.findOne({ email: body.email, state: true });
      console.log(verify);
      if (verify) {
        if (compareSync(body.password, verify.password)) {
          const token = sign(
            {
              exp: Math.floor(Date.now() / 1000) + 60 * 60,
              data: { id: verify._id, name: verify.name, email: verify.email },
            },
            process.env.JWT_SECRET
          );
  
          return res.json({ status: true, token });
        }
      } else {
        return res.json({
          status: false,
          errors: 'Email and password incorrect',
        });
      }
    } catch (e) {
      return res.json({ status: false, errors: e.message});
    }
  };

export {register, login};