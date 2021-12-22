import UserModel from './../model/user.model';
import { hashSync, compareSync } from 'bcrypt';
import { sign, decode } from 'jsonwebtoken';


const register = async (req, res) => {
  try {
    const body = req.body;
    body.password = hashSync(body.password, 10);
    const user = new UserModel(body);
    await user.save();
    return res.json({ status: true });
  } catch (e) {
    return res.json({ status: false, errors: e.message });
  }
};


const login = async (req, res) => {

  try {
    const body = req.body;
    const verify = await UserModel.findOne({ email: body.email, state: true });
    if (verify) {
      if (compareSync(body.password, verify.password)) {
        const token = sign(
          {
            exp: Math.floor(Date.now() / 1000) + 60 * 30,
            data: { id: verify._id, name: verify.names, email: verify.email, identificacion: verify.identificacion },
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
    return res.json({ status: false, errors: e.message });
  }
};


const update = async (req, res) => {
  try {
    const params = req.params;
    const body = req.body;
    await UserModel.findByIdAndUpdate(params.userId, body);
    return res.json({ status: true });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

const remove = async (req, res) => {
  try {
    const params = req.params;
    await UserModel.findByIdAndDelete(params.userId);
    return res.json({ status: true });
  } catch (err) {
    return res.json({ status: false, errors: err.message });
  }
};

const getUser = async (req, res) => {
  try {
    const data = await UserModel.find({});
    return res.json({ status: true, items: data });
  } catch (e) {
    return res.json({ status: false, errors: e.message });
  }
}


export { register, login, update, remove, getUser };