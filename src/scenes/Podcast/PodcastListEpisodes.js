import Table from "../../lib/components/Table/Table";
import style from "./Podcast.module.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PodcastService from "../../services/podcast.service";
const PodcastListEpisode = () => {
  let params = useParams();
  const [podcastData, setPodcastData] = useState([]);
  useEffect(() => {
    PodcastService.getPodcastEpisodes(params.podcastId).then(
      (res) => {
        setPodcastData(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);
  return (
    <div className={style.PodcastEpisodesContainer}>
      <div className={style.PodcastEpisodesCounter}>
        Episodes: {podcastData.length}
      </div>
      <div className={style.PodcastEpisodesTable}>
        <Table data={podcastData} />
      </div>
    </div>
  );
};

export default PodcastListEpisode;
