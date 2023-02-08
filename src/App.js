import HomeScreen from "./components/Home";
import NavBar from "../src/components/Nav";
import "./index.css";

function App(props){
    return(
        <div>
          <NavBar/>
          <HomeScreen/>
        </div>
    );
}
export default App;
