import Layout from "./layout/Layout";
import { Routes, Route } from "react-router-dom";
import PodcastList from "./scenes/PodcastList/PodcastList";
import Podcast from "./scenes/Podcast/Podcast";
import PodcastEpisode from "./scenes/PodcastEpisode/PodcastEpisode";

import "../src/styles/global.css";
import Error404 from "./404";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PodcastList />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/podcastepisode" element={<PodcastEpisode />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
};

export default App;
