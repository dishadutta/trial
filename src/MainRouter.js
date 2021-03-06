import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Listing from './mainList/listing';
import Menu from './Menu';
import Enterprise from './registerPage/enterprise';
import Student from './registerPage/student';

const MainRouter = () => (
    <div>
      
      <Switch>
        {/* <Route exact path={process.env.PUBLIC_URL+'/'} component={Listing} />
        <Route exact path={process.env.PUBLIC_URL+'/jobs'} component={Listing} />
        <Route exact path={process.env.PUBLIC_URL+'/register-student'} component={Student}/>
        <Route exact path={process.env.PUBLIC_URL+'/register-enterprise'} component={Enterprise}/> */}
        <Route exact path='/trial' component={Listing} />
        <Route exact path='/trial/jobs' component={Listing} />
        <Route exact path='/trial/register-student' component={Student}/>
        <Route exact path='/trial/register-enterprise' component={Enterprise}/>
      </Switch>
    </div>
  );
  export default MainRouter;