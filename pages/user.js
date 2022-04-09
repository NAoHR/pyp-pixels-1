import User_container from "../containers/User_container";
import IfMax from "../utils/IfMax";
const User = () => {
    return (
        <IfMax Component={User_container}/>
    )
}

export default User;