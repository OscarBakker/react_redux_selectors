export const SHOW_ALL_SCHOOLS = 'SHOW_SHOW_ALL_SCHOOLS';

export const showAllSchools = payload => (dispatch)  => {
  dispatch({
    type: payload.type,
  });
};
