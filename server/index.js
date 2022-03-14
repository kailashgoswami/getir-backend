// server/index.js
const jsonServer = require('json-server')
const app = jsonServer.create()
const router = jsonServer.router('db.json');
const PORT = process.env.PORT || 5001;
const middlewares = jsonServer.defaults();

const task = require('./api/task');

app.use(middlewares);
app.use('/api', router);
app.get('/api/tasks', task.findAll);
//app.get('/api/task/:id', task.findById);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
  app._router.stack.forEach(function(r){
  if (r.route && r.route.path){
    console.log(r.route.path)
  }
})
});
