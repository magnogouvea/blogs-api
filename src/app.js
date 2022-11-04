const express = require('express');
require('express-async-errors');
const loginRouter = require('./routes/login.routes');
const userRouter = require('./routes/user.routes');
const categoryRouter = require('./routes/category.routes');
const postCategory = require('./routes/postCategory.routes');
const error = require('./middlewares/erros');
// ...

const app = express();

app.use(express.json());

app.use('/', loginRouter);
app.use('/', userRouter);
app.use('/', categoryRouter);
app.use('/', postCategory);
app.use(error);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
