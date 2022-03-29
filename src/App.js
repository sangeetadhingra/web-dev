import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/HelloWorld";
import Tuiter from "./components/tuiter ";
import Labs from "./components/labs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ExploreScreen from "./components/tuiter /Explore-Screen/ExploreScreen";
import HomeScreen from "./components/tuiter /Home-Screen";

function App() {
    return (
        <BrowserRouter>
        <div className="container">
            <Routes>
                <Route path="/">
                    <Route index element={<Labs/>}/>
                    <Route path="hello"
                           element={<HelloWorld/>}/>
                    <Route path="tuiter"
                           element={<Tuiter/>}/>
                        <Route index
                               element={<HomeScreen/>}/>
                        <Route path="explore"
                               element={<ExploreScreen/>}/>
                </Route>
            </Routes>
        </div>
        </BrowserRouter>
    );
}
export default App;

