import "./App.css";
import AddEmp from "./components/AddEmp";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Route,  BrowserRouter as Router,Routes } from "react-router-dom";
import View from "./components/View";
import EditEmp from "./components/EditEmp";



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addemp" element={<AddEmp />} />
          <Route exact path="/viewemp/:empID" element={<View/>} />
          <Route exact path="/editemp/:empID" element={<EditEmp/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
