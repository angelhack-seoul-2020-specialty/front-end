const getToken = () => {
  const token = document.cookie.match(new RegExp("(^| )access_token_cookie=([^;]+)"));
  return token ? token[2] : null;
};

const decodeToken = (string) => {
  return JSON.parse(window.atob(string.split('.')[1]))
}

export {getToken, decodeToken}
