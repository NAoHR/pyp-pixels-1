import Main_container from "../containers/Main_container"
import IfMax from "../utils/IfMax";
import { useEffect, useState } from "react";
import Loader from "../components/other/Loader";
import { apiCaller } from "../utils/apiCaller";

const Main = () => {
  const [data, setData] = useState(null);

  useEffect(()=>{
    apiCaller.nytimes()
      .then((val)=>{
        const valdata = val.data?.response?.docs
        if(valdata === undefined){
          setData([])
        }else{
          let parsedData = valdata.map((vdat)=>{
            return {
              abstract : vdat.abstract,
              headline : vdat.headline.main,
              source : vdat.source,
              weburl : vdat.web_url,
              image : vdat.multimedia.filter((val) => val.subtype == "master315")
            }
          })
          setData(parsedData);
        }
      })
      .catch((e)=>{
        setData(false);
      })
  },[])
  return (
    <>
      {
        data !== null && <IfMax data={data} Component={Main_container}/>
      }
      <Loader status={data !== null && true}/>
    </>
  )
}

export default Main;