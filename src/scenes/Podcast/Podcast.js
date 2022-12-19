import style from "./Podcast.module.css";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PodcastService from "../../services/podcast.service";
const Podcast = () => {
  let params = useParams();
  const [podcastData, setPodcastData] = useState([]);
  useEffect(() => {
    PodcastService.getPodcastDetails(params.podcastId).then(
      (res) => {
        setPodcastData(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);
  return (
    <div className={style.PodcastContainer}>
      <div className={style.PodcastContainerLeft}>
        <div className={style.Image}>
          <div className={style.ImageMock}></div>
        </div>
        <div>
          <h3></h3>
          <p>hello</p>
        </div>
        <div>
          <h3>Descriptions:</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
        </div>
      </div>
      <div className={style.PodcastContainerRight}>
        <Outlet />
      </div>
    </div>
  );
};

export default Podcast;
