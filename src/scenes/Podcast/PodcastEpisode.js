import style from "./Podcast.module.css"
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const PodcastEpisode = () => {
    let { id } = useParams(); 

    useEffect(() => {
        console.log(`${id}`);
    },[id]);
    return (
    <div className={style.PodcastEpisodeContainer}>
        <div>
            Descriptions Episode
        </div>
        <div>
            Player
        </div>
    </div>)
  };
export default PodcastEpisode;
  