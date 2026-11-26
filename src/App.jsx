import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/login';
import Projects from './pages/projects';
import Tasks from './pages/tasks';
import Teams from './pages/team';
import Clients from './pages/clients';
import Dashboard from './pages/dashboard';
import Calender  from "./pages/calender";
import Settings from "./pages/settings";
import Register from './pages/register';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/tasks" element={<Tasks/>}/>
        <Route path="/teams" element={<Teams/>}/>
        <Route path="/clients" element={<Clients/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/calender" element={<Calender/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;