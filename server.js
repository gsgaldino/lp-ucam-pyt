const express = require('express');
const app = express();
const path = require('path');

const PORT  = process.env.PORT || 3333;

const publicPath = path.join(__dirname, 'client', "build");

app.use(express.static(publicPath));
app.use('*', express.static(publicPath));

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
