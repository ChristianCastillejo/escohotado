import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Menu from "./components/menu";
import Home from "./screens/home";
import Articles from "./screens/articles";
import store from "./lib/store";

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
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
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
    </Provider>
  );
}

export default App;
