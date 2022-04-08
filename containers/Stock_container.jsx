import style from "../styles/containers/Stock.module.css";
import Navbar from "../components/other/Navbar";
import {FaPlusCircle,FaChartPie,FaFire} from "react-icons/fa"
import Stock_card from "../components/stock/Stock_card";
import Core_wrapper from "../components/other/Core_wrapper";
import stockJson from "../utils/stock_data.json"
import Error_Handler from "../components/other/Error_Handler";

const Stock_card_looper = ({data,title,message}) => {
    if(data.length > 0){
        return data.map((val,index)=>{
            return <Stock_card stock_code={val.stock_code} stock_co={val.stock_co} stock_price={val.stock_price} stock_dp={val.stock_dp} stock_pr={val.stock_pr} cuan={val.cuan} key={index} />
        })
    }
    return <Error_Handler title={title} message={message}/>
}

const Stock_container = () => {
    
    return (
        <>
            <Core_wrapper>
                <div className={style.me_stock}>
                    <div className={style.me_stock_top_side}>
                        <div className={`${style.top_side_wrapper} ${style.ms_left}`}>
                            <h2 className={`${style.me_stock_title} ${style.upper_text}`}>
                                Your Stock
                            </h2>
                        </div>
                        <div className={`${style.top_side_wrapper} ${style.ms_right}`}>
                            <h2 className={`${style.me_stock_title} poppins`}>
                                <FaPlusCircle />
                            </h2>
                            <h2 className={`${style.me_stock_title} poppins`}>
                                <FaChartPie />
                            </h2>
                        </div>
                    </div>
                    <div className={style.me_stock_bottom_side}>
                        <Stock_card_looper data={stockJson["userStock"]} title={"no data"} message={"let's invest for the first time"} />
                    </div>
                </div>

                <div className={style.me_stock}>
                    <div className={style.me_stock_top_side}>
                        <div className={`${style.top_side_wrapper} ${style.ms_left}`}>
                            <h2 className={`${style.me_stock_title} ${style.upper_text}`}>
                                Watchlist
                            </h2>
                        </div>
                        <div className={`${style.top_side_wrapper} ${style.ms_right}`}>
                            <h2 className={`${style.me_stock_title} poppins`}>
                                <FaPlusCircle />
                            </h2>
                        </div>
                    </div>
                    <div className={style.me_stock_bottom_side}>
                        <Stock_card_looper data={stockJson["userWL"]} title={"no data"} message={"create your watchlist"} />
                    </div>
                </div>

                <div className={style.me_stock}>
                    <div className={style.me_stock_top_side}>
                        <div className={`${style.top_side_wrapper} ${style.ms_left}`}>
                            <h2 className={`${style.me_stock_title} ${style.upper_text}`}>
                                Trending
                            </h2>
                        </div>
                        <div className={`${style.top_side_wrapper} ${style.ms_right}`}>
                            <h2 className={`${style.me_stock_title} poppins`}>
                                <FaFire />
                            </h2>
                        </div>
                    </div>
                    <div className={style.me_stock_bottom_side}>
                        <Stock_card_looper data={stockJson["trending"]} title={"no data"} message={"no current trending stock"} />
                    </div>
                </div>
            </Core_wrapper>
            <Navbar />
        </>
    )
}

export default Stock_container;