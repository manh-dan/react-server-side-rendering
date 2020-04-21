import { TEST_ACTION } from "../_constants/test.constant";
export const testActions = {
    connectRedux,
};

function connectRedux() {
  return async (dispatch) => {
      dispatch(success());
  };
  function success() {
    return { type: TEST_ACTION, payload: 'Connect redux success' };
  }
}
