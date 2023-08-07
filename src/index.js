const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  res.send('Hello WORLD!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});
