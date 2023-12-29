import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<h1>Hello</h1>}></Route>
        <Route path="/g" element={<h1>Hell 5</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
