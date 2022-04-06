import Main_container from "../containers/Main_container"
import IfMax from "../utils/IfMax";

const Main = () => {
  return <IfMax data={undefined} Component={Main_container}/>
}

export default Main;