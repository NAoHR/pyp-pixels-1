import style from "../../styles/components/main/Stats_card.module.css";
import {FaMoneyBillWave} from "react-icons/fa"

const Stats_card = ({title,money,detail,isplus}) => {
    return (
        <span className={style.stats_card_wrapper}>
            <div className={style.stats_card}>
                <div className={style.stats_card_decoration}></div>
                <h1 className={`${style.stats_card_title} ${style.up_index}`}>
                    {title}
                </h1>
                <h2 className={`${style.stats_card_money} ${style.up_index}`}>
                    Rp. {String(money).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                </h2>
                <h2 className={`${style.stats_card_detail} ${style.up_index}`} style={{
                    color : isplus ? "var(--green)" : "var(--red)"
                }}>
                    {isplus ? "+" : "-"} Rp. {String(detail).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                </h2>
            </div>
        </span>
    )
}

export default Stats_card;