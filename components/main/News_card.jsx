import style from "../../styles/components/main/News_card.module.css";
import Link from "next/link"

const News_card = ({data}) => {
    return (
        <div className={style.news_card}>
            <div className={style.image_side}>
                {
                    data.image[0]?.url == undefined ? 
                    <h2 className={style.imagenotfound}>
                        NEWS
                    </h2>
                    :
                    <img src={`https://static01.nyt.com/${data.image[0]?.url}`} alt="news image" className={style.news_image} />
                }
            </div>  
            <div className={style.text_side}>
                <div className={style.text_title_side}>
                    <h1 className={style.text_title}>
                        {data.headline}
                    </h1>
                </div>
                <p className={style.text_description}>
                    {data.abstract}
                </p>
                <p className={`${style.text_description} ${style.bold}`}>
                    {data.source}
                </p>
                <Link href={data.weburl}>
                    <a target="blank">
                        <div className={style.more_side}>
                            <h3 className={style.more}>
                                More
                            </h3>
                        </div>
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default News_card;