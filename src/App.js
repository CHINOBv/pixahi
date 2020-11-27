import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ImagesProvider } from "./contexts/ImagesContext";

import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <ImagesProvider>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" render={() => <Home />} />
          </Switch>
        </div>
      </ImagesProvider>
    </Router>
  );
}

export default App;
