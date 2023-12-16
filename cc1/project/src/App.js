import Sin from "./pages/Login"
import Logon from "./pages/Logon"
import Ho from "./pages/Ho";
import Tri from "./pages/Tri"
import { Route,Routes } from "react-router-dom";
import About from "./pages/About";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Sin/>}></Route>
        <Route path="/Signup" element={<Logon/>}></Route>
        <Route path="/Home" element={<Ho/>}></Route>
        <Route path="/Trips" element={<Tri/>}></Route>
        <Route path="/About" element={<About/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
