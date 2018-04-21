import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from "./containers/AppContainer";

if (document.getElementById('school-app')) {
  ReactDOM.render(<AppContainer />, document.getElementById('school-app'));
}
