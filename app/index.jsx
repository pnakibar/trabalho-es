import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import todoApp from './reducers.jsx';
import App from './components/App';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import thunk from 'redux-thunk';
import './main.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


let store = createStore(todoApp, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <App />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('app')
);
