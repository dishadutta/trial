import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Listing from './mainList/listing';
import Menu from './Menu';
import Enterprise from './registerPage/enterprise';
import Student from './registerPage/student';

const MainRouter = () => (
    <div>
      <Menu />
      <Switch>
        <Route exact path={['/', '/jobs']} component={Listing} />
        <Route exact path='/register-student' component={Student}/>
        <Route exact path='/register-enterprise' component={Enterprise}/>
      </Switch>
    </div>
  );
  export default MainRouter;