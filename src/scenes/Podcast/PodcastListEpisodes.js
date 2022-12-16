import Table from "../../lib/components/Table/Table";
import style from "./Podcast.module.css"
const PodcastListEpisode = () => {

    const mockTable = [
      {title:'Lorem Title', date:'12/01/2022', duration:'14:00'},
      {title:'Lorem Title', date:'12/01/2022', duration:'14:00'},
      {title:'Lorem Title', date:'12/01/2022', duration:'14:00'},
      {title:'Lorem Title', date:'12/01/2022', duration:'14:00'},
      {title:'Lorem Title', date:'12/01/2022', duration:'14:00'},
      {title:'Lorem Title', date:'12/01/2022', duration:'14:00'},
      {title:'Lorem Title', date:'12/01/2022', duration:'14:00'},
    ]
    
    return (
    <div className={style.PodcastEpisodesContainer}>
      <div className={style.PodcastEpisodesCounter}>Episodes: 666</div>
      <div className={style.PodcastEpisodesTable}>
        <Table data={mockTable}/>  
      </div>
    </div>)
  };
  
  export default PodcastListEpisode;
  