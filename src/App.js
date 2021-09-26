import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import Header from "./components/Header";
import Loader from "./components/Loader";
import Home from "./views/Home";
import SingleCountry from "./views/SingleCountry";

function App() {
  const [countries, setCountries] = useState([]);
  const [isDarkMode, setDarkMode] = useState(false);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleDark = () => {
    setDarkMode(!isDarkMode);
  };
  return (
    <div className="App">
      <Header handleDark={handleDark} isDarkMode={isDarkMode} />
      {countries.length > 0 ? (
        <main className={isDarkMode ? "bg-dark_main" : "bg-light_main"}>
          <Switch>
            <Route exact path="/">
              <Home countries={countries} isDarkMode={isDarkMode} />
            </Route>
            <Route exact path="/single-country/:name">
              <SingleCountry countries={countries} isDarkMode={isDarkMode} />
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
