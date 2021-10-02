import "./App.css";
import Comp from "./comp/Comp";
import logo from "./Letter-B-To-Watch-small.png";

function App() {
    return (
        <div className='App'>
            <img src={logo} alt='logo' className={"logo"} />
            <Comp />
        </div>
    );
}

export default App;
