import style from "../layout.module.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      {/* Testing purpose */}
      <div>
        <ul>
          <li>
            <Link to="/">Home & Podcast List</Link>
          </li>
          <li>
            <Link to="/podcast">Podcast</Link>
          </li>
          <li>
            <Link to="/podcastepisode">PodcastEpisode</Link>
          </li>
        </ul>
      </div>
      {/* Testing purpose */}
    </div>
  );
};

export default Header;
