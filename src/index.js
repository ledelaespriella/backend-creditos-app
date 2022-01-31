import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import UserRoutes from './routes/user.routes'
import CreditRoutes from './routes/credit.routes';
import AdminRoutes from './routes/admin.routes';

const app = express();
dotenv.config();

const main = async () => {
  await mongoose.connect(process.env.URL_DB)
    .then(() => { console.log('Connect to database') });
  app.use(express.json());
  app.use(cors());
  app.get('/', (req, res) => {
    res.send('Hello World Julian!');
  });

  app.use('/api', UserRoutes);
  app.use('/api', CreditRoutes);
  app.use('/api', AdminRoutes)

  app.listen(process.env.PORT, () => {
    console.log(
      `Example app listening at http://localhost:${process.env.PORT}`
    );
  });
};

main().catch((err) => console.log(err));
