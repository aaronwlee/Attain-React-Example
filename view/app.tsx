import { React, ReactRouterDOM, styled } from "./deps.ts";
import Users from "./components/Users.tsx";
import Home from "./components/Home.tsx";
import Nav from "./components/Nav.tsx";
const {
  BrowserRouter: Router,
  Switch,
  Route,
} = ReactRouterDOM;

const Logo = styled.img`
  height: 200px;
  width: 200px;
`;

const Grid = styled(({ className, children, ...rest }: any) =>
  <div className={className} {...rest}>
    <div />
    <div>
      {children}
    </div>
    <div />
  </div>
)`
  display: grid;
  grid-template-columns: 1fr minmax(250px, 800px) 1fr;
`;

const App = () => {
  return (
    <Grid>
      <Router>
        <div>
          <h1 style={{ textAlign: "center", paddingTop: 20 }}>
            Welcome to the Attain Framework
          </h1>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img
              style={{ height: 200, width: 300 }}
              src="https://github.com/aaronwlee/Attain/blob/master/Attain.png?raw=true"
            />
          </div>

          <Nav />
          <Switch>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Grid>
  );
};

export default App;
