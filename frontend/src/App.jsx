import { Route, Routes } from "react-router"
import Template from "../Template"
import Button from "./components/atom/Button"
import Testing from "./pages/Testing"

function App() {

  return (
   <div>
      <Routes>
        <Route path="/testing" element={<Testing />}/>
      </Routes>
   </div>
  )
}

export default App
