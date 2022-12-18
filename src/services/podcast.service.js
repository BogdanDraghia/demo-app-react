import axios from "axios"

const APIURL = "https://itunes.apple.com"
const getAllPodcasts = async ()=>{
    return await axios.get(APIURL +"/us/rss/toppodcasts/limit=100/genre=1310/json" )
    .then((res)=>{
        localStorage.setItem("podcasts",res)
        return res.data
    }
    )
}


const PodcastService = {
    getAllPodcasts
}
export default PodcastService