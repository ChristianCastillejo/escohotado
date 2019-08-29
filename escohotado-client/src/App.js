import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Menu from "./components/menu";
import Home from "./screens/home";
import Resources from "./screens/resources";
import Resource from "./screens/resource";
import store from "./lib/store";

function App() {
  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <Menu />
        <Route exact path="/" component={Home} />
        <Route exact path="/articles" component={Resources} />
        <Route exact path="/articles/:id" component={Resource} />
        <Route exact path="/videos" component={Resources} />
        <Route exact path="/videos/:id" component={Resource} />
        <Route exact path="/books" component={Resources} />
        <Route exact path="/books/:id" component={Resource} />
      </Router>
    </Provider>
  );
}

export default App;
