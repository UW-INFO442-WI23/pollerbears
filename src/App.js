import HomeScreen from "./components/Home";
import { NavBar, Footer } from "../src/components/Nav";
import "./index.css";

function App(props){
    return(
        <div>
          <NavBar/>
          <HomeScreen/>
          <Footer/>
        </div>
    );
}
export default App;
