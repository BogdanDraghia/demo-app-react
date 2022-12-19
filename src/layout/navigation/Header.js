import style from "../layout.module.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className={style.HeaderContainer} style={{ position: "relative" }}>
      {/* Testing purpose */}
      <div
        style={{
          position: "absolute",
          left: -300,
          backgroundColor: "#f2f2f2",
          padding: 10,
        }}
      >
        <ul>
          <li>
            <Link to="/">Home & Podcast List</Link>
          </li>
          <li>
            <Link to="/podcast">Podcast</Link>
          </li>
          <li>
            <Link to="/podcast/podcastepisode">PodcastEpisode</Link>
          </li>
        </ul>
      </div>
      {/* Testing purpose */}
      <h2>
        <Link to="/">Podcaster</Link>
      </h2>
    </div>
  );
};

export default Header;
