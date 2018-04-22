function memoizeSelection(keyProp) {
  let cache = {};

  return function(name, stateProperty) {
    if(name in cache) {
      return cache[name];
    } else {
      const cachedProperty = stateProperty.filter(key => key[keyProp] === name);
      cache[name] = cachedProperty;
      return cachedProperty;
    }
  }
}
const memoizedSelection = memoizeSelection('location');
export const selectSchoolsByCountry = (name, stateProperty) => {
  return memoizedSelection(name, stateProperty);
};
