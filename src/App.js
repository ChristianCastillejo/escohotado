import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "./components/menu";
import Home from "./screens/home";
import Articles from "./screens/articles";
const routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/articles",
    component: Articles,
    exact: true
  }
];

function App() {
  return (
    <div>
      <Router>
        <Menu />
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            render={props => (
              <route.component {...props} routes={route.routes} />
            )}
          />
        ))}
      </Router>
    </div>
  );
}

export default App;
