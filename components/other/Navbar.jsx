import style from "../../styles/components/other/Navbar.module.css";
import {FaHome, FaUserAlt, FaRegChartBar} from "react-icons/fa";
import CustomLink from "../../utils/Custom_link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Navbar = () =>{
    const [nowPage,setNP] = useState(null);
    const router = useRouter()
    useEffect(()=>{
        setNP(router.pathname);
    },[router.isReady])

    return (
        <nav className={style.navbar_main}>
            <div className={style.icon_wrapper}>
                <div className={style.sub_icon}>
                    <CustomLink path={"/"}>
                        <h2 className={style.icon_main} style={{
                            borderBottom : nowPage == "/" && "2px solid var(--violet)"
                        }}>
                            <FaHome />
                        </h2>
                    </CustomLink>
                </div>
                <div className={style.sub_icon}>
                    <CustomLink path={"/stock"}>
                        <h2 className={style.icon_main} style={{
                            borderBottom : nowPage == "/stock" && "2px solid var(--violet)"
                        }}>
                            <FaRegChartBar />
                        </h2>
                    </CustomLink>
                </div>
                <div className={style.sub_icon}>
                    <CustomLink path={"/user"}>
                        <h2 className={style.icon_main} style={{
                            borderBottom : nowPage == "/user" && "2px solid var(--violet)"
                        }}>
                            <FaUserAlt />
                        </h2>
                    </CustomLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;