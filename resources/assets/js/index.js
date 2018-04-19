import React from 'react';
import ReactDOM from 'react-dom';
import SchoolContainer from './containers/SchoolContainer';

if (document.getElementById('school-app')) {
  ReactDOM.render(<SchoolContainer />, document.getElementById('school-app'));
}
