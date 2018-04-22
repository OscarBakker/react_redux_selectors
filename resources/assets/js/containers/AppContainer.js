import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import store from '../store/configureStore';
import SchoolContainer from "./SchoolContainer";

class AppContainer extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <SchoolContainer/>
        </Provider>
      </div>
    );
  }
}

AppContainer.propTypes = {};

AppContainer.defaultProps = {};

export default AppContainer;
