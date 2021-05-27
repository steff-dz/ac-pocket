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
          <div className="bg-white relative min-h-screen border border-black flex flex-col items-center justify-center pt-2">
            <header className="w-9/12">
              <Navigation />
            </header>
            <main className="">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/villagers" component={VillagersPage} />
                <Route exact path="/fishnbugs" component={FishBugsPage} />
              </Switch>
            </main>
            <Footer />
          </div>
        </Route>
      </Router>
    </>
  );
}

export default App;
