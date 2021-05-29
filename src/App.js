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
          <header className="w-9/12 mx-auto mt-4">
            <Navigation />
          </header>
          <main className="min-h-screen">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/villagers" component={VillagersPage} />
              <Route exact path="/fishnbugs" component={FishBugsPage} />
            </Switch>
          </main>
          <Footer />
        </Route>
      </Router>
    </>
  );
}

export default App;
//bg-white relative min-h-screen border border-black flex flex-col items-center justify-center pt-2
