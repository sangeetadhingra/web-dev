import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/HelloWorld";
import Tuiter from "./components/tuiter ";
import Labs from "./components/labs";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
        <div className="container">
            <Routes>
                <Route path="/hello"
                       element={<HelloWorld/>}/>
                <Route path="/"
                       element={<Labs/>}/>
                <Route path="/tuiter"
                       element={<Tuiter/>}/>
            </Routes>
        </div>
        </BrowserRouter>
    );
}
export default App;

