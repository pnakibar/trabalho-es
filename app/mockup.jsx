const { List, Map } = require('immutable');
const customers = List([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => Map({
  id: i,
  name: `name ${i}`,
  email: `email${i}@email.com`,
})));

export default customers;
