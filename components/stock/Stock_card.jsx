import style from "../../styles/components/stock/Stock_card.module.css";

const Stock_card = ({stock_code,stock_co,stock_price,stock_dp,stock_pr,cuan}) => {
    const color = cuan ? "var(--green)" : "var(--red)";

    return (
        <div className={style.me_stock_card}>
            <div className={`${style.stock_side} ${style.stock_side_left}`}>
                <h3 className={`${style.stock_code} poppins black`}>
                    {stock_code}
                </h3>
                <p className={`${style.stock_name} poppins black`}>
                    {stock_co}
                </p>
            </div>
            <div className={`${style.stock_side} ${style.stock_side_right}`}>
                <div className={style.chart}>
                    <div className={style.bar} style={{
                        height : cuan ? "30%" : "100%",
                        backgroundColor : color
                    }}>

                    </div>
                    <div className={style.bar} style={{
                        height : "60%",
                        backgroundColor : color
                    }}>

                    </div>
                    <div className={style.bar} style={{
                        height : cuan ? "100%" : "30%",
                        backgroundColor : color
                    }}>
                    </div>
                </div>
                <div className={style.stock_price}>
                    <h3 className={`${style.price_text} poppins black`}>
                        {stock_price}
                    </h3>
                    <p className={`${style.price_text_detail} poppins`} style={{
                        color : color
                    }}>
                        {cuan ? "+" : "-"}{stock_dp} ({cuan ? "+" : "-"} {stock_pr}%)
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Stock_card;