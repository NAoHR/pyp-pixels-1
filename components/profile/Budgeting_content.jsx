import { parse_money } from "../../utils/external_tools";
import style from "../../styles/components/user/Budgeting_content.module.css";

const Budgeting_content = ({color,title,money}) => {
    return (
        <div className={style.budgeting_content} style={{
            backgroundColor : color
        }}>
            <h4 className={`${style.budgeting_title} poppins ${style.budgeting_perks}`}>
                {title}
            </h4>
            <h4 className={`${style.budgeting_value} poppins ${style.budgeting_perks}`}>
                {parse_money(money)}
            </h4>
        </div>
    )
}

export default Budgeting_content;