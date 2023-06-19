
import Header from "./Header/Header";
// import Footer from "./Footer/Footer";
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

