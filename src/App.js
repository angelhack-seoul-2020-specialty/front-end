import React from 'react';
import { Switch } from 'react-router-dom';
import { FancyRoute } from './component/tools/fancyRoute';
import { Helmet } from 'react-helmet';
import routes from './routes/routes';

function App() {
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

export default App;
