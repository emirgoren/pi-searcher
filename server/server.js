const express = require('express');
const next = require('next');
const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

//routers
const userRouter = require('./routes/userRouter');
const apiRouter = require('./routes/apiRouter');

app.prepare().then(() => {
  
  const server = express();
  //middlewares
  server.use(express.urlencoded({extended: true}));
  server.use(express.json());


  //routes
  server.use('/', userRouter(app));
  server.use('/api', apiRouter);

  server.all('*', (req, res) => {
    return handle(req, res);
  });
  
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });

});