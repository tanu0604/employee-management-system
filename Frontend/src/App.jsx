import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import CreateEmp from "./component/CreateEmp"
import ReadEmp from "./component/ReadEmp"
import UpdateEmp from "./component/UpdateEmp"
import DeleteEmp from "./component/DeleteEmp"
import Home from "./component/Home";
function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/create" element={<CreateEmp/>}></Route>
         <Route path="/read" element={<ReadEmp/>}></Route>
         <Route path="/update" element={<UpdateEmp/>}></Route>
         <Route path="/delete" element={<DeleteEmp/>}></Route>


         <Route path="/update/:id" element={<UpdateEmp/>}></Route>
         <Route path="/delete/:id" element={<DeleteEmp/>}></Route>

        </Routes>
      </Router>

    
    </>
  );
}

export default App;
