import Navbar from "../components/other/Navbar";
import style from "../styles/containers/Main.module.css"
import {MdOutlineWavingHand} from "react-icons/md"
import Stats_card from "../components/main/Stats_card";
import News_card from "../components/main/News_card";

const NewsCardLooper = ({newsData}) => {
    if(newsData === false){
        return <p>wew</p>
    }else if(newsData.length == 0){
        return <p>0</p>
    }
    return newsData.map((val,index)=> {
        return <News_card data={val} key={index} />
    })
}

const Main_container = ({data}) => {
    return (
        <>
            <div className={style.main_stats}>
                <div className={style.main_stats_text_side}>
                    <h2 className={style.main_stats_text}>
                        Good Morning, Rudolf <MdOutlineWavingHand /> 
                    </h2>
                </div>
                <div className={style.main_stats_content_side}>
                    <Stats_card title={"Tabungan"} money={900000000} detail={100000} isplus={true} />
                    <Stats_card title={"Investasi"} money={900000000} detail={100000} isplus={false} />
                    <Stats_card title={"Dana Darurat"} money={900000000} detail={100000} isplus={false} />
                </div>
            </div>
            <div className={style.news}>
                <div className={style.news_title_side}>
                    <h1 className={style.news_title}>
                        News for you
                    </h1>
                </div>
                <div className={style.news_content_side}>
                    <NewsCardLooper newsData={data} />
                </div>
            </div>
            <Navbar />
        </>
    )
}

export default Main_container;