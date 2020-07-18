const getToken = () => {
  return document.cookie.match(new RegExp("(^| )access_token_cookie=([^;]+)"))[2];
};

const decodeToken = (string) => {
  return JSON.parse(window.atob(string.split('.')[1]))
}

export {getToken, decodeToken}
