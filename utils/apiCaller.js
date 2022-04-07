import axios from "axios"

const apiLink = {
    nytimes : `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=financial&api-key=${process.env.NEXT_PUBLIC_NYTIMES}`
}

export const apiCaller = {
    nytimes : () =>  {
        return axios.get(apiLink.nytimes);
    }
}