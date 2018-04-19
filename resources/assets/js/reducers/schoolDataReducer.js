/* eslint-disable camelcase */
import { SHOW_ALL_SCHOOLS } from '../actions/schoolDataActions';

const emailsReducer = (state = [
  {schoolName: 'VU', location: 'Netherlands'},
  {schoolName: 'Berkley', location: 'USA'},
  {schoolName: 'Stanford', location: 'USA'},
], actions) => {
  switch (actions.type) {
    case SHOW_ALL_SCHOOLS:
      return state;
    default:
      return state;
  }
};

export default emailsReducer;
