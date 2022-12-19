import axios from "axios";

const APIURL = "https://itunes.apple.com";
const getAllPodcasts = async () => {
  return await axios
    .get(APIURL + "/us/rss/toppodcasts/limit=100/genre=1310/json")
    .then((res) => {
      localStorage.setItem("podcasts", res);
      return res.data;
    });
};

const getPodcastDetails = async (podcastId) => {
  return await axios
    .get(`https://itunes.apple.com/search?term=${podcastId}`)
    .then((res) => {
      localStorage.setItem("podcasts", res);
      return res.data.feed;
    });
};
const getPodcastEpisodes = async (podcastId) => {
  return await axios
    .get(
      `https://cors-anywhere.herokuapp.com/https://itunes.apple.com/lookup?id=${podcastId}&media=podcast&entity=podcastEpisode&attribute=all`
    )
    .then((res) => {
      return res.data.results;
    });
};

const PodcastService = {
  getAllPodcasts,
  getPodcastDetails,
  getPodcastEpisodes,
};
export default PodcastService;
