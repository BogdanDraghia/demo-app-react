import Search from "../../lib/components/Search/Search";
import style from "./PodCastList.module.css"
import { useEffect, useState} from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {podcastSlice} from "../../slices/podcast"

import PodcastService from "../../services/podcast.service"
import { Link } from "react-router-dom";
const PodcastList = () => {
  const [podcastList, setPodcastList] = useState([]);
  const [loading,setLoading] = useState(true)
  useEffect(() => {
    PodcastService.getAllPodcasts().then(
      (res)=>{
        setPodcastList(res)
        setLoading(false)
      },
      (err)=>{
        console.log(err)
      }
    )

  },[])

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
  const mockPodcastList = [
    {
      title: 'SONG EXPLODER',
      author: 'SONG EXPLODER'
    },
    {
      title: 'SONG EXPLODER',
      author: 'SONG EXPLODER'
    },
    {
      title: 'SONG EXPLODER',
      author: 'SONG EXPLODER'
    },
    {
      title: 'SONG EXPLODER',
      author: 'SONG EXPLODER'
    },
    {
      title: 'SONG EXPLODER',
      author: 'SONG EXPLODER'
    },
    {
      title: 'SONG EXPLODER',
      author: 'SONG EXPLODER'
    },
    {
      title: 'lorem ipsum',
      author: 'Dolerem'
    },
  ]
  console.log(podcastList)
  return (
  <div className={style.PodcastListWrap}>
      <Search/>
    <div className={style.PodcastList}>
    {
      !loading && podcastList.feed.entry.map((data, index) => {
        return <ItemPodcast key={index} {...data} />
      })
    }

    </div>
  </div>);
};

const ItemPodcast = (props) => {
  console.log(props)
  return (
    <div className={style.ItemPodcastContainer}>
      <div className={style.ItemPodcast}>
      <div className={style.ImagePodcastWrap}>
        <div className={style.ImagePodcast}>
        </div>
      </div>
      <h2>
        {props["im:name"].label}
      </h2>
      <p>
        {/* Author: {props.author} */}
        {props["im:artist"].label}
      </p>
      <div>
        <Link to={"/podcast"}>
        Show podcast
        </Link>
      </div>
      </div>
    </div>
  )
}

export default PodcastList;
