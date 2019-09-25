import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Loading from "./components/loading";
import store from "./lib/store";
const Menu = lazy(() => import("./components/menu"));
const Home = lazy(() => import("./screens/home"));
const Resources = lazy(() => import("./screens/resources"));
const Article = lazy(() => import("./screens/article"));

function App() {
  return (
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <Suspense fallback={<Loading />}>
          <Menu />
          <Route exact path="/" component={Home} />
          <Route exact path="/articles" component={Resources} />
          <Route exact path="/articles/:id" component={Article} />
          <Route exact path="/videos" component={Resources} />
          <Route exact path="/books" component={Resources} />
          <Route exact path="/books/:id" component={Article} />
        </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
