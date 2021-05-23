import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import VillagersPage from "./pages/VillagersPage";

function App() {
  return (
    <>
      <Router>
        <Route>
          <div className="bg-white min-h-screen">
            <header>
              <Navigation />
            </header>
            <main>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/villagers" component={VillagersPage} />
              </Switch>
            </main>
          </div>
        </Route>
      </Router>
    </>
  );
}

export default App;
