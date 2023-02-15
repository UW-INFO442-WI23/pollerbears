import HomeScreen from "./components/Home";
import { NavBar, Footer } from "../src/components/Nav";
import Filter from "./components/Filter";
import "./index.css";

function App(props){
    return(
        <div>
          <NavBar/>
          <Filter />
          <HomeScreen/>
          <Footer/>
        </div>
    );
}
export default App;