import Search from "../../lib/components/Search/Search";
import style from "./PodCastList.module.css"

const PodcastList = () => {

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
  return (
  <div className={style.PodcastListWrap}>
      <Search/>
    <div className={style.PodcastList}>
    {mockPodcastList.map((data, index) => {
      return <ItemPodcast key={index} {...data} />
    })}
    </div>
  </div>);
};

const ItemPodcast = (props) => {
  return (
    <div className={style.ItemPodcastContainer}>
      <div className={style.ItemPodcast}>
      <div className={style.ImagePodcastWrap}>
        <div className={style.ImagePodcast}>
        </div>
      </div>
      <h2>
        {props.title}
      </h2>
      <p>
        Author: {props.author}
      </p>
      </div>
    </div>
  )
}

export default PodcastList;
