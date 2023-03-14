export const selectIsLogin = ({ user }) => user.isLogin;
export const selectUser = ({ user }) => user.user;
export const selectLoginAndToken = ({ user }) => {
  const { isLogin, token } = user;
  return { isLogin, token };
};
