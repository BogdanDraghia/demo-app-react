import Layout from "./layout/Layout";
import { Routes, Route } from "react-router-dom";
import PodcastList from "./scenes/PodcastList/PodcastList";
import Podcast from "./scenes/Podcast/Podcast";
import PodcastEpisode from "./scenes/Podcast/PodcastEpisode";

import "../src/styles/global.css";
import Error404 from "./404";
import PodcastListEpisodes from "./scenes/Podcast/PodcastListEpisodes";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PodcastList />} />
        <Route path="/podcast" element={<Podcast />}>
          <Route path=":podcastId" element={<PodcastListEpisodes />} />
          <Route
            path=":podcastId/episode/:episodeId"
            element={<PodcastEpisode />}
          />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
};

export default App;
