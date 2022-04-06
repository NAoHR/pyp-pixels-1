import Navbar from "../components/other/Navbar";
import style from "../styles/containers/Main.module.css"
import {MdOutlineWavingHand} from "react-icons/md"
import Stats_card from "../components/main/Stats_card";
import News_card from "../components/main/News_card";

const jsoned = {
    "abstract": "A pandemic program allowed people to exclude the benefits from their income, but in some cases they are still being counted. Here’s what to do.",
    "web_url": "https://www.nytimes.com/2022/04/01/your-money/college-financial-aid-unemployment-benefits.html",
    "snippet": "A pandemic program allowed people to exclude the benefits from their income, but in some cases they are still being counted. Here’s what to do.",
    "lead_paragraph": "Unemployment benefits helped millions of people who lost their jobs in the pandemic, but now the payments may throw a wrench into the college financial aid process.",
    "print_section": "B",
    "print_page": "5",
    "source": "The New York Times",
    "multimedia": [],
    "headline": {
        "main": "Jobless Benefits’ Unintended Fallout: Reduced College Financial Aid",
        "kicker": "your money adviser",
        "content_kicker": null,
        "print_headline": "Pandemic Help, College Aid Hurdle",
        "name": null,
        "seo": null,
        "sub": null
    },
    "keywords": [],
    "pub_date": "2022-04-01T13:00:11+0000",
    "document_type": "article",
    "news_desk": "Business",
    "section_name": "Your Money",
    "byline": {},
    "type_of_material": "News",
    "_id": "nyt://article/1e821ab9-711f-5d9e-a05d-241d3d961d2a",
    "word_count": 1114,
    "uri": "nyt://article/1e821ab9-711f-5d9e-a05d-241d3d961d2a"
}

const Main_container = () => {
    return (
        <>
            <div className={style.main_stats}>
                <div className={style.main_stats_text_side}>
                    <h2 className={style.main_stats_text}>
                        Selamat Pagi, Rudolf <MdOutlineWavingHand /> 
                    </h2>
                </div>
                <div className={style.main_stats_content_side}>
                    <Stats_card title={"Tabungan"} money={900000000} detail={100000} isplus={true} />
                    <Stats_card title={"Investasi"} money={900000000} detail={100000} isplus={false} />
                    <Stats_card title={"Dana Darurat"} money={900000000} detail={100000} isplus={false} />
                </div>
            </div>
            <div className={style.news}>
                <div className={style.news_title_side}>
                    <h1 className={style.news_title}>
                        News for you
                    </h1>
                </div>
                <div className={style.news_content_side}>
                    <News_card data={jsoned}/>
                </div>
            </div>
            <Navbar />
        </>
    )
}

export default Main_container;