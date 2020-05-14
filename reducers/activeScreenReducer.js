export const setScreen = () => {
  return {
    type: 'SET_SCREEN',
  };
};

const activeScreenReducer = (state = false, action) => {
  switch (action.type) {
    case 'SET_SCREEN':
      return !state;
    default:
      return state;
  }
};

export default activeScreenReducer;
