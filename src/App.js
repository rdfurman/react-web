import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Navbar, Nav, NavItem, Grid } from 'react-bootstrap';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('./routes/Home'),
  loading: Loading
});

const DemonShanker2 = Loadable({
  loader: () => import('./routes/DemonShanker2'),
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
              <NavItem componentClass={Link} href="/demonshanker2/" to="/demonshanker2/" active={window.location.pathname === '/demonshanker2/'}>Demon Shanker 2</NavItem>
              {/* <NavItem componentClass={Link} href="/minecraftmap" to="/minecraftmap" active={window.location.pathname === '/minecraftmap'}>Minecraft Map</NavItem> */}
            </Nav>

          </Navbar>

          <Grid fluid>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/demonshanker2/" component={DemonShanker2} />
              {/* <Route path="/minecraftmap" component={MinecraftMap} /> */}
            </Switch>
          </Grid>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
