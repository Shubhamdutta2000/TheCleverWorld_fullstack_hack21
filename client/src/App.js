import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Navbar />
          <Switch>
            
          </Switch>
          <Footer />
        </BrowserRouter>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
