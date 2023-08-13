const express = require('express');
const helmet = require('helmet');
require('dotenv').config();

const app = express();
app.use(helmet());

app.get('/', (req: any, res: any, next: any) => {
  res.send('Hello WORLD!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
