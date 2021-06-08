import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { VillagerList } from "./utils/VillagerContext";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import VillagersPage from "./pages/VillagersPage";
import MemoryGame from "./pages/MemoryGame";
import FishBugsPage from "./pages/FishBugsPage";

function App() {
  return (
    <>
      <VillagerList>
        <Router>
          <Route>
            <header className=" w-full md:w-9/12 mx-auto mt-2">
              <Navigation />
            </header>

            <main className="min-h-screen relative">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/villagers">
                  <VillagersPage />
                </Route>
                <Route exact path="/memorygame">
                  <MemoryGame />
                </Route>
                <Route exact path="/fishnbugs">
                  <FishBugsPage />
                </Route>
              </Switch>
            </main>
            <Footer />
          </Route>
        </Router>
      </VillagerList>
    </>
  );
}

export default App;
//bg-white relative min-h-screen border border-black flex flex-col items-center justify-center pt-2
