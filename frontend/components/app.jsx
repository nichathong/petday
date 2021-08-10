import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import GreetingContainer from './navbar/navbar_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import Homepage from '../homepage/homepage';
// import SearchContainer from './search/search_container';
// import BenchShowContainer from './bench_show/bench_show_container';
// import BenchFormContainer from './bench_form/bench_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import BusinessShowContainer from './business/business_show/business_show_container';
// import BusinessShow from './business/business_show/business_show';

const App = () => (
  <div>
    {/* <header>
      <Link to="/" className="header-link">
        <h1>PetDay</h1>
      </Link>
      <GreetingContainer />
    </header> */}
      <Route exact path="/" component={GreetingContainer}/>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/businesses/:businessId" component={BusinessShowContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      
  </div>
);

export default App;
