import TuitList from "../Tuit-List";
import WhatsHappening
    from "./whats-happening";
const HomeScreen = () => {
    return(
        <div>
            <WhatsHappening/>
            <h3><TuitList/></h3>
        </div>
    )
}
export default HomeScreen;