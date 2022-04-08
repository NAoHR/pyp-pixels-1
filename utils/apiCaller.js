import axios from "axios";

const apiURL = {
    // nyTimes : `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=financial&api-key=${process.env.NEXT_PUBLIC_NYTIMES}`
    nyTimes : `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=financial&api-key=8qSZmxm2opJ23cX4I14mc6UpvsbOfuos`
}

export const apiCaller = {
    nyTimes : () =>  {
        return axios.get(apiURL.nyTimes);
    }
}