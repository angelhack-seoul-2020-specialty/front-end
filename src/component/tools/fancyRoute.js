import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import { useConstructor } from '../../hooks/useConstructor';

const FancyRoute = (props) => {
  useConstructor(() => {
    nprogress.configure({ parent: '#root' });
    nprogress.start();
  });
  
  useEffect(() => {
    nprogress.done();
  }, []);
  
  return (
      <Route {...props} />
  );
}

export { FancyRoute }
