import { Route, Switch } from "react-router";
import Header from "./components/Header";
import Home from "./views/Home";
import SingleCountry from "./views/SingleCountry";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="bg-dark_main">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/single-country/:name">
            <SingleCountry />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
