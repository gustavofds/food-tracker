const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const { Sequelize } = require('sequelize');
require('dotenv').config();
const userRouter = require('./routes/userRouter');
const weightRouter = require('./routes/weightRouter');

const app = express();
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

const sequelize = new Sequelize(
  `postgres://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:5432/${process.env.DATABASE_NAME}`
);

(async function dbConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

app.get('/', (req: any, res: any, next: any) => {
  res.send('Hello WORLD!');
});
app.use('/users', userRouter);
app.use('/weights', weightRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
