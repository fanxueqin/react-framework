import React,  { Component ,Suspense, lazy} from 'react';
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import PageLoading from 'components/pageLoading/index';

const BackHomeLayout = lazy( () => import('layout/back/backHomeLayout'));
const ShowHomeLayout = lazy( () => import('layout/show/showHomeLayout'));
const Login = lazy( () => import('views/login'));
const NotFound = lazy( () => import('views/notFound'));
const NotAuth = lazy( () => import('views/notAuth'));
const AuthorizedRoute = lazy( () => import('router/auth'));

class App extends Component{
  render(){
    return (
      <div className="App">
        <HashRouter>
          <Suspense fallback={PageLoading}>
              <Switch>
                <Redirect path='/' exact to="/show" />
                <AuthorizedRoute  path="/show" component={ShowHomeLayout} />
                <AuthorizedRoute  path="/back" component={BackHomeLayout} />
                <Route path="/login" component={Login}></Route>
                <Route path="/notAuth" component={NotAuth}></Route>
                <Route component={NotFound} />
              </Switch>
          </Suspense>
        </HashRouter>
        
      </div>
    );
  }
}
export default App;
