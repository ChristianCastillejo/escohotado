import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Menu from "./components/menu";
import Home from "./screens/home";
import Articles from "./screens/articles";
import Article from "./screens/article";
import store from "./lib/store";

function App() {
  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <Menu />
        <Route exact path="/" component={Home} />
        <Route exact path="/articles" component={Articles} />
        <Route exact path="/articles/:id" component={Article} />
      </Router>
    </Provider>
  );
}

export default App;
