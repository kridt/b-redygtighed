import { BrowserRouter, Route, Routes } from "react-router-dom";
import Temperetur from "./pages/Temperetur";

function App() {
  return (
    <>
      <BrowserRouter className="App">
        <Routes>
          <Route path="/" element={<Temperetur />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
