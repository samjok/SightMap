export const setCard = index => {
  return {
    type: 'SET_CARD',
    data: index,
  };
};

const cardReducer = (state = 0, action) => {
  switch (action.type) {
    case 'SET_CARD':
      return action.data;
    default:
      return state;
  }
};

export default cardReducer;
