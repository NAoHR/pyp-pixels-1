import Core_wrapper from "../components/other/Core_wrapper";
import Navbar from "../components/other/Navbar";
import style from "../styles/containers/User.module.css";
import Recent_Transaction from "../components/profile/Recent_Transaction";
import {parse_money} from "../utils/external_tools";
import {BsFillGearFill,BsFillEnvelopeFill,BsFillBasket3Fill} from "react-icons/bs"
import transaction_data from "../utils/transaction_data.json"
import Budgeting_content from "../components/profile/Budgeting_content";

const User_container = () => {
    return (
        <>
            <Core_wrapper>
                <div className={style.profile_top}>
                    <div className={style.profile_top_perks}>
                        <h2 className={style.icon_perks}>
                            <BsFillEnvelopeFill />
                        </h2>
                        <h2 className={style.icon_perks}>
                            <BsFillGearFill />
                        </h2>
                    </div>
                    <div className={style.profile_main}>
                        <img src="https://cdn1-production-images-kly.akamaized.net/1_edo169zIfrIqXQSw_N-GCf3ys=/1200x675/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/846228/original/051442600_1428484571-Shrek__1_.jpg" alt="" className={style.profilepict} />
                        <h3 className={`${style.user_title}`}>
                            Rudolf Armagedon
                        </h3>
                    </div>
                </div>                
                <div className={style.profile_bottom}>
                    <div className={style.decoration}>
                        <div className={style.decoration_filler}>
                        </div>
                    </div>
                    <div className={style.bottom_main_content}>

                        <div className={style.user_detail_bar}>
                            <div className={style.db_content}>
                                <p className={`${style.db_title} poppins ${style.db_perks}`}>
                                    Cash flow
                                </p>
                                <h2 className={`${style.db_detail} poppins ${style.db_perks}`}>
                                    50
                                </h2>
                            </div>
                            <div className={style.db_content}>
                                <p className={`${style.db_title} poppins ${style.db_perks}`}>
                                    Financial Health
                                </p>
                                <h2 className={`${style.db_detail} poppins ${style.db_perks}`}>
                                    8.6/10
                                </h2>
                            </div>
                            <div className={style.db_content}>
                                <p className={`${style.db_title} poppins ${style.db_perks}`}>
                                    Level
                                </p>
                                <h2 className={`${style.db_detail} poppins ${style.db_perks}`}>
                                    Stage 5
                                </h2>
                            </div>
                        </div>

                        <div className={style.budgeting}>
                            <Budgeting_content title={"Income"} money={10000000} color={"var(--green)"}/>
                            <Budgeting_content title={"Outcome"} money={5000000} color={"var(--red)"}/>
                        </div>

                        <div className={style.recent_transaction}>
                            <h3 className={`${style.recent_text} poppins`}>
                                Recent Transaction
                            </h3>
                            <Recent_Transaction data={transaction_data}/>
                        </div>
                    </div>
                </div>
            </Core_wrapper>
            <Navbar />
        </>
    )
}

export default User_container