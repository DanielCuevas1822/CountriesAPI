import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Home from "./views/Home";
import SingleCountry from "./views/SingleCountry";

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="App">
      <Header />
      {countries.length > 0 ? (
        <main className="bg-dark_main">
          <Switch>
            <Route exact path="/">
              <Home countries={countries} />
            </Route>
            <Route exact path="/single-country/:name">
              <SingleCountry countries={countries} />
            </Route>
          </Switch>
        </main>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default App;
