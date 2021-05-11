import Header from "./components/Header";
import SearchFilter from "./components/SearchFIlter";
import Home from "./views/Home";
import SingleCountry from "./views/SingleCountry";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="bg-dark_main">
        <SingleCountry />
      </main>
    </div>
  );
}

export default App;
