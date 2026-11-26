import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from './pages/projects';
import Tasks from "./pages/tasks";
import Login from "./pages/login";
import Team from './pages/team';
import Settings from './pages/settings';
import Clients from './pages/clients';
import Dashboard from './pages/dashboard';
import Calender from './pages/calender';


function App() {
  
  {/*
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const formsubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  */}

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Login/>}/>
        <Route path = "/projects" element = {<Projects/>}/>
        <Route path = "/tasks"  element = {<Tasks/>}/>
        <Route path = "/team"  element = {<Team/>}/>
        <Route path = "/clients"  element = {<Clients/>}/>
        <Route path = "/settings"  element = {<Settings/>}/>
        <Route path = "/calender"  element = {<Calender/>}/>
        <Route path = "/dashboard"  element = {<Dashboard/>}/>        
      </Routes>
         
    </BrowserRouter>

    {
      /*
    <input type="email" placeholder="Enter your email" required value={email} onChange={(e) => setEmail(e.target.value)} />
    <input type="password" placeholder="Enter your password" required value={password} onChange={(e) => setPassword(e.target.value)} />
    <button type="submit" onClick={console.log({ email, password })}>Submit</button>
    <button type="submit" onClick={() => print()}>Submit</button>

    <form onSubmit={formsubmit}>
      <input type="email" placeholder="Enter your email" required value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Enter your password" required value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
    </>}
    */}
    </>
  );
  
}

export default App;