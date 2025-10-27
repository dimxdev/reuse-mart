import { Route, Routes } from "react-router";
import Template from "../Template";
import Button from "./components/atom/ButtonExample";
import Testing from "./pages/Testing";
import Coret from "./pages/Coret";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/testing" element={<Testing />} />
        <Route path="/coret" element={<Coret />} />
      </Routes>
    </div>
  );
}

export default App;
