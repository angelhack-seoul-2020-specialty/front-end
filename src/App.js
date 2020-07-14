import React, {useEffect} from 'react';
import { Switch, withRouter } from 'react-router-dom';
import { FancyRoute } from './component/tools/fancyRoute';
import { Helmet } from 'react-helmet';
import routes from './routes/routes';

function App({history}) {
  useEffect(() => {
    if (!document.cookie.includes("access_token_cookie")) {
      console.log('redirect')
      history.replace('/login')
    }
  }, [history])
  
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
