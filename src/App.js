import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import VillagersPage from "./pages/VillagersPage";
import FishBugsPage from "./pages/FishBugsPage";

function App() {
  return (
    <>
      <Router>
        <Route>
          <div className="bg-white relative h-screen">
            <header>
              <Navigation />
            </header>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/villagers" component={VillagersPage} />
              <Route exact path="/fishnbugs" component={FishBugsPage} />
            </Switch>
            <Footer />
          </div>
        </Route>
      </Router>
    </>
  );
}

export default App;
