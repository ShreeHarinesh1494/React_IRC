import { Routes, Route } from "react-router-dom";
import Users from "./Pages/users";
import Edituser from "./Pages/edituser";
import Adduser from "./Pages/adduser";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Users />}></Route>
        <Route path="/add" element={<Adduser />}></Route>
        <Route path="/edit/:id" element={<Edituser />}></Route>
      </Routes>
    </>
  );
}

export default App;
