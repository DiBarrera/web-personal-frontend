import {
  Switch,
  Route,
  Link,
  BrowserRouter as Router
} from 'react-router-dom';
import routes from './config/routes';
import AdminHome from './pages/Admin';
import './App.scss';

const cors = require('cors');

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map((route, index) => (
            <RouteWithSubRoutes key={index} {...route} />
          ))}
          <h1>Web Personal - Client</h1>
        </Switch>
      </Router>
    </div>
  )
}

function RouteWithSubRoutes(route) {
  console.log(route)
  return (
    <Route 
      path={route.path}
      exact={route.exact}
      render={props => <route.component routes={route.routes} {...props}/>}
    />
  )
}

export default App;
