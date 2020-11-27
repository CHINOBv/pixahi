import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" render={() => <Home/>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
