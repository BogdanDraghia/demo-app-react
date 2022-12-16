import style from './Podcast.module.css'
import { Outlet } from 'react-router-dom';
const Podcast = () => {
  return (
    <div className={style.PodcastContainer}>
      <div className={style.PodcastContainerLeft}>
          <div className={style.Image}>
            <div className={style.ImageMock}>
            </div>
          </div>
          <div>
            <h3>
              Title
            </h3>
            <p>
              Author
            </p>
          </div>
          <div>
            <h3>
              Descriptions:
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
        </div>
      </div>
      <div className={style.PodcastContainerRight}>
        <Outlet />
      </div>
    </div>
  )
};

export default Podcast;
