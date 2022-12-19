import style from "./Podcast.module.css";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PodcastService from "../../services/podcast.service";
const PodcastEpisode = (props) => {
  const [episodeData, SetEpisodeData] = useState([]);
  let params = useParams();
  console.log(params);
  useEffect(() => {
    PodcastService.getPodcastEpisodes(params.podcastId).then(
      (res) => {
        SetEpisodeData(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);
  console.log(episodeData);
  return (
    <div className={style.PodcastEpisodeContainer}>
      <div>Descriptions Episode</div>
      <div>Player</div>
    </div>
  );
};
export default PodcastEpisode;
