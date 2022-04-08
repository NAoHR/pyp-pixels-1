import style from "../../styles/components/other/Error_Handler.module.css";

const Error_Handler = ({ title, message}) => {
    return(
        <div className={style.error_side}>
            <img src={"/error.svg"} alt="" className={style.errorimage} />
            <div className={style.error_text_side}>
                <h1 className={`${style.error_base} poppins ${style.err_title}`}>
                    {title}
                </h1>
                <h1 className={`${style.error_base} poppins ${style.err_message}`}>
                    {message}
                </h1>
            </div>
        </div>
    )
}

export default Error_Handler;