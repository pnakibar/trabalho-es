const koa = require('koa');
const bodyParser = require('koa-bodyparser');
const _ = require('koa-route');
const static = require('koa-static');
const mount = require('koa-mount');
const app = new koa();

app.use(bodyParser());
app.use(mount('/', static('build/')));


let db = [
  { id: 0, name: 'name 1', email: 'email1@email.com' },
  { id: Date.now(), name: 'name 2', email: 'email2@email.com' },
  { id: Date.now(), name: 'name 3', email: 'email3@email.com' },
  { id: Date.now(), name: 'name 4', email: 'email4@email.com' },
];
app.use(_.get('/customers', function *() {
  yield this.body = db;
}));

app.use(_.get('/customers/:id', function *(id) {
  const selectedCustomer = db.filter((x) => x.id.toString() === id)[0];
  if (selectedCustomer) {
    yield this.body = selectedCustomer;
    return;
  }
  this.response.status = 404;
  yield this.body = { message: 'None found' };
}));

app.use(_.delete('/customers/:id', function *(id) {
  db = db.filter((x) => x.id.toString() !== id);
  yield this.body = db;
}));

app.use(_.put('/customers/', function *() {
  const { name, email } = this.request.body;
  if (!name || !email) {
    this.status = 400;
    yield this.body = {
      message: `Body must contain: [${!name ? ' name' : ''}${!email ? ' email' : ''} ]`,
    };
    return;
  }
  const id = Date.now();
  const newCustomer = {
    id,
    name,
    email,
  };
  db.push(newCustomer);
  yield this.body = newCustomer;
}));


app.listen(3000);
