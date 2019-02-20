import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Navbar, Nav, NavItem, Grid } from 'react-bootstrap';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('./routes/Home'),
  loading: Loading
});

const LudumDare = Loadable({
  loader: () => import('./routes/LudumDare'),
  loading: Loading
});

const Photography = Loadable({
  loader: () => import('./routes/Photography'),
  loading: Loading
});

const YouTube = Loadable({
  loader: () => import('./routes/YouTube'),
  loading: Loading
});

class App extends Component {
  render() {
    return (
      <BrowserRouter forceRefresh>
        <div>
          <Navbar inverse fluid>

            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">rfurman</Link>
              </Navbar.Brand>
            </Navbar.Header>

            <Nav>
              <NavItem componentClass={Link} href="/ludumdare" to="/ludumdare" active={window.location.pathname === '/ludumdare'}>Ludum Dare</NavItem>
              <NavItem componentClass={Link} href="/photography" to="/photography" active={window.location.pathname === '/photography'}>Photography</NavItem>
              <NavItem componentClass={Link} href="/youtube" to="/youtube" active={window.location.pathname === '/youtube'}>YouTube</NavItem>
            </Nav>

          </Navbar>

          <Grid fluid>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/ludumdare" component={LudumDare} />
              <Route path="/photography" component={Photography} />
              <Route path="/youtube" component={YouTube} />
            </Switch>
          </Grid>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
