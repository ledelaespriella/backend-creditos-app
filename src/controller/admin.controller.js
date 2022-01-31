import AdminModel from './../model/admin.model';
import { hashSync, compareSync } from 'bcrypt';
import { sign, decode } from 'jsonwebtoken';

const register = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);
    body.password = hashSync(body.password, 10);
    const user = new AdminModel(body);
    await user.save();
    return res.json({ status: true });
  } catch (e) {
    return res.json({ status: false, errors: e.message });
  }
};

const login = async (req, res) => {
  try {
    const body = req.body;
    const verify = await AdminModel.findOne({ email: body.email, state: true });
    console.log(verify);
    if (verify) {
      if (compareSync(body.password, verify.password)) {
        const token = sign(
          {
            exp: Math.floor(Date.now() / 1000) + 60 * 30,
            data: {
              id: verify._id,
              name: verify.names,
              lastName: verify.lastName,
              email: verify.email,
              rol: verify.rol,
            },
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
    console.log(body);
    await AdminModel.findByIdAndUpdate(params.id, body);
    return res.json({ status: true });
  } catch (ex) {
    return res.json({ status: false, errors: ex.message });
  }
};

const getAdmin = (req, res) => {
  const admin = req.user;
  return res.json({ status: true, item: admin });
};

export { register, login, getAdmin, update };
