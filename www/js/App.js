import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent.js';

const App = () => (
  <MuiThemeProvider>
  <MyAwesomeReactComponent />
    <div>HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH</div>
  </MuiThemeProvider>
);

ReactDOM.render(
  <App />,
  document.getElementById('App')
);