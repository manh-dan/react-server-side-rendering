import { TEST_ACTION } from '../_constants/test.constant';
const defaultState = {
  connectRedux: '',
};
const test = (state = defaultState, action) => {
  switch (action.type) {
    case TEST_ACTION: {
        return {
          ...state,
          connectRedux: action.payload,
        };
    }
    default:
      return state;
  }
};

export default test;