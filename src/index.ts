const express = require('express');
const helmet = require('helmet');
require('dotenv').config();
const database = require('./database');

(async function testConnection() {
  try {
    await database.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

const app = express();
app.use(helmet());

app.get('/', (req: any, res: any, next: any) => {
  res.send('Hello WORLD!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
