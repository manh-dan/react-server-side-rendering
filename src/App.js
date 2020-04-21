import React, { Component } from "react";
import { store } from "./_helpers/store";
import { Provider } from "react-redux";
// Import setting router
import { history } from "./_helpers/history";
import { Router } from "react-router-dom";
import createSwitchRoutes from "./_routes/index";
const switch_routes = createSwitchRoutes();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          {switch_routes}
        </Router>
      </Provider>
    );
  }
}

export default App;
