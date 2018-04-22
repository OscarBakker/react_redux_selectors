function memoizeSelection() {
  let cache = {};

  return function(locationName, schools) {
    if(locationName in cache) {
      return cache[locationName];
    } else {
      const filteredSchools = schools.filter(school => school.location === locationName);
      cache[locationName] = filteredSchools;
      return filteredSchools;
    }
  }
}
const memoizedSelection = memoizeSelection();
export const selectSchoolsByCountry = (locationName, schools) => {
  return memoizedSelection(locationName, schools);
};
