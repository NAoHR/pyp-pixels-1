import Navbar from "../components/other/Navbar";
import Stock_container from "../containers/Stock_container";
import IfMax from "../utils/IfMax";
const Stock = () => {
    return (
        <>
            <IfMax Component={Stock_container}/>
        </>
    )
}

export default Stock;