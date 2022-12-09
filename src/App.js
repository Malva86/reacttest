import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
      </header>
      <h3 className="git">
        en-source code at{" "}
        <a href="https://github.com/Malva86/reacttest">GitHub</a> and host at{" "}
        <a href="https://melodious-dodol-603cbe.netlify.app/">Netlify</a>
      </h3>
    </div>
  );
}

export default App;
