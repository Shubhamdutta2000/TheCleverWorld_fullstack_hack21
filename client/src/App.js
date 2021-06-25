import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";

function App() {
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          
          <Switch>
            <Route exact path="/" component={} />
          </Switch>
          
        </BrowserRouter>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
