

let apiKey="34867d52f0de40f5b3252702ba15755d";

let latest_news_url="https://newsapi.org/v2/top-headlines?country=us&apiKey=34867d52f0de40f5b3252702ba15755d";


async function getNews(url){

    try{
        let res=await fetch(url);
        let data=await res.json();
        return data;
    }
    catch(err){
        console.log(err);
    }
}

export default getNews;