const express = require('express');
const cors = require('cors');
const { createReadStream } = require('fs');

const app = express();
app.use(cors());
app.use('/static', express.static('build/static'));

app.use((req, res, next) =>
  createReadStream('build/index.html').pipe(res)
);

app.listen(3000);