import { RESET_APP_STATE } from "../../constants";
import { onSignOut } from "../../config/auth";

export function resetAppState(navigation) {
  function resetState() {
    return {
      type: RESET_APP_STATE
    };
  }
  return dispatch => {
    onSignOut()
      .then(() => {
        dispatch(resetState());
      })
      .catch(error => {
        console.log(error.stack);
      })
      .finally(() => navigation.navigate(`OnboardingNavigator`));
  };
}
