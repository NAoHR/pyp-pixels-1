import style from "../../styles/components/main/Stats_card.module.css";
import {parse_money} from "../../utils/external_tools"

const Stats_card = ({ title, money, detail, income }) => {
    return (
        <span className={style.stats_card_wrapper}>
            <div className={style.stats_card}>
                <div className={style.stats_card_decoration}></div>
                <h1 className={`${style.stats_card_title} ${style.up_index}`}>
                    {title}
                </h1>
                <h2 className={`${style.stats_card_money} ${style.up_index}`}>
                    {parse_money(money)}
                </h2>
                <h2 className={`${style.stats_card_detail} ${style.up_index}`} style={{
                    color : income ? "var(--green)" : "var(--red)"
                }}>
                    {income ? "+" : "-"} {parse_money(detail)}
                </h2>
            </div>
        </span>
    )
}

export default Stats_card;