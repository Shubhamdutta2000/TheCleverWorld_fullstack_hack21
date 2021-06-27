import { BrowserRouter, Switch, Redirect, Route } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import SignIn from './components/Auth/SignIn';
import Registration from './components/Auth/Register';
import UserDashboard from './components/UserDashboard/';
import Authorities from './components/Authorities';

function App() {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={SignIn} />
            <Route path="/register" component={Registration} />
            <Route path="/dashboard" component={UserDashboard} />
            <Route path="/authority/dashboard" component={Authorities} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
