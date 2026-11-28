import { useState ,useEffect} from "react";
import { useLocation } from "react-router-dom";
function Dashboard() {
    const location = useLocation();
    const[userData, setUserdata] = useState("");
   // function displaydata(){
    //    setUserdata(location.state);
      //  console.log(userData)
    //}
    useEffect(() => {
        setUserdata(location.state);
        console.log(userData);
    },[])

    return (
        <>
          <div>{userData.username}</div>
          <div>{userData.password}</div>
        </>
    );
}
export default Dashboard;