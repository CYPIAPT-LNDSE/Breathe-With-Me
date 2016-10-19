export const getState = () => {
  return JSON.parse(localStorage.getItem('state')) || {};
};

export const saveState = (state) => {
  const newState = Object.assign({}, getState(), state);
  localStorage.setItem('state', JSON.stringify(newState));
};
