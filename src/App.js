import React, {useEffect} from 'react';
import { Switch, withRouter } from 'react-router-dom';
import { FancyRoute } from './component/tools/fancyRoute';
import { Helmet } from 'react-helmet';
import routes from './routes/routes';
import {query} from './lib/query';
import {getToken} from './lib/token';

function App({history, location}) {
  useEffect(() => {
    console.log('1.0.2a')
  }, [])
  
  useEffect(() => {
    if (!getToken()) {
      console.log('redirect')
      history.replace('/login')
      return
    }
    
    query({
      method: 'get',
      url: `/api/cafeA@company.com/amount`,
    })
        .catch(err => {
          const error = err.toString()
          
          if (error.includes('401')) {
            alert('인증 토큰이 만료되었습니다. 다시 로그인해주세요.');
            document.cookie = "access_token_cookie=; expires=Thu, 01 Jan 1999 00:00:10 GMT;";
            history.replace('/login')
          }
        });
  }, [history, location.pathname])
  
  return (
    <>
      <Helmet>
        <title>커피박 재자원화 프로젝트</title>
      </Helmet>
  
      <Switch>
        {routes.map((route, i) =>
            <FancyRoute key={i} {...route} />
        )}
      </Switch>
    </>
  );
}

export default withRouter(App);
