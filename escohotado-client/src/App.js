import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Provider } from "react-redux";
import cookie from "react-cookies";
import Loading from "./components/loading";
import store from "./helpers/store";
const Menu = lazy(() => import("./components/menu"));
const Home = lazy(() => import("./screens/home"));
const Resources = lazy(() => import("./screens/resources"));
const Article = lazy(() => import("./screens/article"));
const CreateArticle = lazy(() => import("./screens/createArticle"));
const EditArticle = lazy(() => import("./screens/editArticle"));
const CreateVideo = lazy(() => import("./screens/createVideo"));
const EditVideo = lazy(() => import("./screens/editVideo"));
const Login = lazy(() => import("./screens/login"));
const Admin = lazy(() => import("./screens/admin"));
const Footer = lazy(() => import("./components/footer"));

function isUserAuthenticated() {
  const accessToken = cookie.load("access-token");
  return accessToken ? true : false;
}

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isUserAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL}>
          <Menu />
          <Switch>
            <Route exact path="/" component={Home} />

            <Route exact path="/articles" component={Resources} />
            <Route exact path="/articles/:id" component={Article} />

            <Route exact path="/videos" component={Resources} />

            <Route exact path="/article/new" component={CreateArticle} />
            <Route exact path="/articles/:id/edit" component={EditArticle} />

            <Route exact path="/video/new" component={CreateVideo} />
            <Route exact path="/videos/:id/edit" component={EditVideo} />

            <Route exact path="/login" component={Login} />

            <ProtectedRoute exact path="/admin" component={Admin} />
            <ProtectedRoute exact path="/admin/videos" component={Resources} />
            <ProtectedRoute
              exact
              path="/admin/articles"
              component={Resources}
            />
          </Switch>
          <Footer />
        </Router>
      </Provider>
    </Suspense>
  );
}

export default App;
