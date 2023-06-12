
import Header from "./Header/Header";
// import Conatiner from "./Container/Conatiner";
// import Crausal from "./Crausel/Crausal";
import {Outlet} from "react-router-dom";


const App=()=> {
  return (
    <div >
     <Header/>
     <Outlet/>
    </div>
  );
}


export default App;

