import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar";
import "./sb-admin-2.min.css";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import UserCreate from "./UserCreate";
import UserList from "./UserList";
import Login from "./Login";
import axios from "axios";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portal from "./Portal";
import Userview from "./Userview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        
        <Route path="/portal" element={<Portal />}>
          <Route path="dashboard" element={<Dashboard />}></Route>
          <Route path="user-list" element={<UserList />}></Route>
          <Route path="user-create" element={<UserCreate />}></Route>
          <Route path="user-view/:id" element={<Userview/>}></Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
