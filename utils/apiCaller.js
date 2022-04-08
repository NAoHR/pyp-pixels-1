import axios from "axios";

const apiURL = {
    nyTimes : `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=financial&api-key=${process.env.NEXT_PUBLIC_NYTIMES}`
}

export const apiCaller = {
    nyTimes : () =>  {
        return axios.get(apiURL.nyTimes);
    }
}