
import Header from "./Header/Header";
// import Conatiner from "./Container/Conatiner";
// import Crausal from "./Crausel/Crausal";
import {Outlet} from "react-router-dom";
import Footer from "./Footer/Footer";


const App=()=> {
  return (
    <div >
     <Header/>
     <Outlet/>
     <Footer/>
    </div>
  );
}


export default App;

