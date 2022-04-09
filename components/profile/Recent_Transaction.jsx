import Error_Handler from "../other/Error_Handler"
import style from "../../styles/components/user/Recent_Transaction.module.css"
import {BsFillBasket3Fill,BsFillCreditCardFill,BsBarChartFill} from "react-icons/bs"
import {parse_money} from "../../utils/external_tools";

const RT_Card = ({title, value, cuan}) => {
    const color = cuan ? "var(--green)" : "var(--red)"
    const symbol = cuan ? "+" : "-";
    let Icon;

    switch(title.toLowerCase()){
        case "belanja":
            Icon = BsFillBasket3Fill;
            break;
        case "investasi":
            Icon = BsBarChartFill;
            break
        default:
            Icon = BsFillCreditCardFill;
            break;
    }

    return (
        <div className={style.recent_card}>
            <h4 className={`${style.rc_perks} poppins ${style.rc_title}`}>
                <span style={{
                    marginRight : "8px",
                    color: "var(--violet)"
                }}>
                    <Icon />
                </span> {title}
            </h4>
            <h4 className={`${style.rc_perks} poppins ${style.rc_price}`} style={{
                color : color
            }}>
                {symbol} {parse_money(value)}
            </h4>
        </div>
    )
}

const Recent_Transaction = ({data}) => {
    if(data.length > 0){
        return data.map((val)=>{
            return (
                <div className={style.recent_content}>
                    <h4 className={`${style.rt_date} poppins`}>
                        {val.date}
                    </h4>
                    {
                        val.data.map((eachData,i)=>{
                            return <RT_Card title={eachData.title} value={eachData.value} cuan={eachData.cuan} key={i}/>
                        })
                    }
                </div>
            )
        })
    }
    return <Error_Handler title={"0 Transactions"} message={"No Transactions Yet"}/>
}

export default Recent_Transaction