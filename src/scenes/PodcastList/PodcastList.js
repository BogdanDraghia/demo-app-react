import Search from "../../lib/components/Search/Search";
import style from "./PodCastList.module.css";
import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {podcastSlice} from "../../slices/podcast"

import PodcastService from "../../services/podcast.service";
import { Link } from "react-router-dom";
const PodcastList = () => {
  const [podcastList, setPodcastList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    PodcastService.getAllPodcasts().then(
      (res) => {
        setPodcastList(res);
        setLoading(false);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  // const dispatch = useDispatch();
  // const handleGetAllPodcasts= () => {
  //   dispatch(podcastSlice())
  //     .unwrap()
  //     .then(() => {
  //       console.log("data")
  //     })
  //     .catch(() => {
  //       console.log("ok")
  //     });
  // };

  return (
    <div className={style.PodcastListWrap}>
      {!loading && <Search lengthOfPodcasts={podcastList.feed.entry.length} />}
      <div className={style.PodcastList}>
        {!loading &&
          podcastList.feed.entry.map((data, index) => {
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
