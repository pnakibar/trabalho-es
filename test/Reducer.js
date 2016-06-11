const chai = require('chai');
const chaiImmutable = require('chai-immutable');
const expect = chai.expect;
const should = chai.should();
const chaiAsPromised = require('chai-as-promised');
const { List, Map } = require('immutable')
import {createStore} from 'redux'
import todoApp from '../app/reducers'
import * as Actions from '../app/actions'

chai.use(chaiImmutable);
chai.use(chaiAsPromised);


const createMyStore = () => createStore(todoApp)

describe("Manipulating the store to ", function() {
  it("creating an empty store", function () {
    const emptyStore = Map({todos: List.of(), visibilityFilter: Actions.VisibilityFilters.SHOW_ALL})
    const store = createStore(todoApp)
    expect(store.getState()).to.deep.equal(emptyStore)
  })

  describe("Managing todos", function () {
    const store = createMyStore()
    const action = Actions.addTodo('SAMPLE TEXT')

    it("Add a todo with defined text", function () {
      store.dispatch(action)

      const expectationState = Map({
        todos: List.of(Map({id: 0, text: 'SAMPLE TEXT', completed: false})),
        visibilityFilter: Actions.VisibilityFilters.SHOW_ALL
      })

      expect(store.getState()).to.deep.equal(expectationState)
    })

    it("toggle an unexisting Todo", function () {
      const empty = createMyStore()
      const actionToggle = Actions.toggleTodo(99)
      //const err = new TypeError('Cannot read property \'set\' of undefined')
      expect(() => {empty.dispatch(actionToggle)}).to.throw(TypeError)
      // (empty.dispatch(actionToggle)).should.throw(TypeError)
    })

    it("Toggle an existing Todo", function () {
      const actionToggle = Actions.toggleTodo(0)

      store.dispatch(actionToggle)

      const expectationState = Map({
        todos: List.of(Map({id: 0, text: 'SAMPLE TEXT', completed: true})),
        visibilityFilter: Actions.VisibilityFilters.SHOW_ALL
      })

      expect(store.getState()).to.deep.equal(expectationState)

    })
  })
});
