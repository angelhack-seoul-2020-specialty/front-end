import {getToken, decodeToken} from './token';

const classContent = (provide, demand) => {
  return decodeToken(getToken()).user_claims.usertype === 'Provide' ? provide : demand;
}

export {classContent}
