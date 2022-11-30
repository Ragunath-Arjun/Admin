import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import "./sb-admin-2.min.css";
import Topbar from './Topbar';
import Dashboard from './Dashboard';
// import "./all.min.css";

function App() {
  return (
    <div id="wrapper">
      <Sidebar/>
      <div id="content-wrapper" class="d-flex flex-column">
      <div id="content">
      <Topbar/>
      <div class="container-fluid">

      <Dashboard/>
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
