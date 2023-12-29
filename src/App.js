import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Home";
import { SocketProvider } from "./providers/Socket";

function App() {
  return (
    <div className="App">
      <Routes>
        <SocketProvider>
          <Route path="/" element={<Homepage />}></Route>
        </SocketProvider>
      </Routes>
    </div>
  );
}

export default App;
