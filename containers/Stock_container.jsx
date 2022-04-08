import style from "../styles/containers/Stock.module.css";
import Navbar from "../components/other/Navbar";
import {FaPlusCircle,FaChartPie,FaFire} from "react-icons/fa"
import Stock_card from "../components/stock/Stock_card";

const Stock_container = () => {
    
    return (
        <>
            <div className={style.stock_wrapper}>
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
                        <Stock_card stock_code={"ANJY"} stock_co={"Pt Aku kamu Tbk"} stock_price={"69.420"} stock_dp={400} stock_pr={15} cuan={true}/>
                        <Stock_card stock_code={"BOTX"} stock_co={"Pt Afiliator Kenz"} stock_price={"0.0008"} stock_dp={900} stock_pr={98} cuan={false}/>
                        <Stock_card stock_code={"ANJY"} stock_co={"Pt Aku kamu Tbk"} stock_price={"69.420"} stock_dp={400} stock_pr={15} cuan={true}/>
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
                        <Stock_card stock_code={"ANJY"} stock_co={"Pt Aku kamu Tbk"} stock_price={"69.420"} stock_dp={400} stock_pr={15} cuan={true}/>
                        <Stock_card stock_code={"BOTX"} stock_co={"Pt Afiliator Kenz"} stock_price={"0.0008"} stock_dp={900} stock_pr={98} cuan={false}/>
                        <Stock_card stock_code={"ANJY"} stock_co={"Pt Aku kamu Tbk"} stock_price={"69.420"} stock_dp={400} stock_pr={15} cuan={true}/>
                        <Stock_card stock_code={"ANJY"} stock_co={"Pt Aku kamu Tbk"} stock_price={"69.420"} stock_dp={400} stock_pr={15} cuan={true}/>
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
                        <Stock_card stock_code={"ANJY"} stock_co={"Pt Aku kamu Tbk"} stock_price={"69.420"} stock_dp={400} stock_pr={15} cuan={true}/>
                        <Stock_card stock_code={"BOTX"} stock_co={"Pt Afiliator Kenz"} stock_price={"0.0008"} stock_dp={900} stock_pr={98} cuan={false}/>
                        <Stock_card stock_code={"ANJY"} stock_co={"Pt Aku kamu Tbk"} stock_price={"69.420"} stock_dp={400} stock_pr={15} cuan={true}/>
                    </div>
                </div>
            </div>
            <Navbar />
        </>
    )
}

export default Stock_container;