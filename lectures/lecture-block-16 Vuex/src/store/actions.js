// actions could be async.
// payload is an optional parameter. Could be an object to provide multiple values at once.
export const updateValueAction = ({ commit }, payload) => {
  commit('updateValue', payload);
};