import Search from "../../lib/components/Search/Search";
import style from "./PodCastList.module.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import {getAllPodcasts} from "../../redux/podcastSlice"
const PodcastList = () => {
  const podcasts = useSelector((state) => state.podcasts)
  const dispatch = useDispatch()

  useEffect(() => {
    const podcasts = JSON.parse(localStorage.getItem("persist:root"));
    if (podcasts.podcasts.length !== 0 && podcasts.podcasts !== "[]") {
      console.log(podcasts)
    } else {
      dispatch(getAllPodcasts());
    }
},[])
  return (
    <div className={style.PodcastListWrap}>
      { <Search lengthOfPodcasts={podcasts.length} />}
      <div className={style.PodcastList}>
        {
          podcasts.map((data, index) => {
            return <ItemPodcast key={index} {...data} />;
          })}
      </div>
    </div>
  );
};

const ItemPodcast = (props) => {
  return (
    <div className={style.ItemPodcastContainer}>
      <Link to={"/podcast/" + props.id.attributes["im:id"]}>
        <div className={style.ItemPodcast}>
          <div className={style.ImagePodcastWrap}>
            <div className={style.ImagePodcast}>
              <img
                alt={props["im:name"].label}
                src={props["im:image"][2].label}
              />
            </div>
          </div>
          <h2>{props["im:name"].label}</h2>
          <p>
            {/* Author: {props.author} */}
            {props["im:artist"].label}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default PodcastList;
