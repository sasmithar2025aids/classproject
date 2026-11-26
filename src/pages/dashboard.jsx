import { useState } from "react";
import { useLocation } from "react-router-dom";
function Dashboard() {
    const location = useLocation();
    const[userData, setUserdata] = useState("");
    function displaydata(){
        setUserdata(location.state);
        console.log(userData)
    }
    return (
        <>
           <button onClick = {displaydata}>button</button>
        </>
    );
}
export default Dashboard;