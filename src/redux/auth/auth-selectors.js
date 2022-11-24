export const isLogin = state => state.auth.isLogin;
export const getUser = state => {
  return state.auth.user;
};
export const getLoadingUserStatus = ({ auth }) => auth.isLoadingUser;
export const getError = ({ auth }) => auth.error;
