/* eslint-disable camelcase */
import { SHOW_ALL_SCHOOLS } from '../actions/schoolActions';

const schoolsReducer = (state = [
  {name: 'VU', location: 'Netherlands'},
  {name: 'Uva', location: 'Netherlands'},
  {name: 'Erasmus', location: 'Netherlands'},
  {name: 'Berkley', location: 'USA'},
  {name: 'NYU', location: 'USA'},
], actions) => {
  switch (actions.type) {
    case SHOW_ALL_SCHOOLS:
      return state;
    default:
      return state;
  }
};

export default schoolsReducer;
