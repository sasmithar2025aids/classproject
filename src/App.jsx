import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './pages/login'
import Projects from './pages/projects'
import Tasks from "./pages/tasks"
import Calendar from "./pages/calendar"
import Clients from "./pages/clients"
import Settings from "./pages/settings"
import Team from "./pages/team"
import Dashboard from "./pages/dashboard"
import Register from "./pages/register"
import Admin from "./pages/admin/adminlayout"
import Admindashboard from "./pages/admin/dashboard"
import Adminsettings from "./pages/admin/settings"
import Userdetails from "./pages/admin/userdetails"

function App(){
  return(
  <BrowserRouter>
  <Routes>
    <Route path="/login"element={<Login/>}/>
    <Route path="/projects" element={<Projects/>}/>
    <Route path="/tasks" element={<Tasks/>}/>
    <Route path="/calendar" element={<Calendar/>}/>
    <Route path="/clients" element={<Clients/>}/>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/settings" element={<Settings/>}/>
    <Route path="/team" element={<Team/>}/>
    <Route path="/" element={<Register/>}/>
    <Route path="/adminlayout" element={<Admin/>}>
    <Route path="dashboard" element={<Admindashboard/>}/>
    <Route path="userdetails" element={<Userdetails/>}/>
    <Route path="settings" element={<Adminsettings/>}/>
     </Route>
  </Routes>

  </BrowserRouter>
  )
}

export default App;