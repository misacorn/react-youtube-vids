import axios from "axios";

const KEY = "AIzaSyDbQ-Fat3am1fBIDYt-IaDq4941awgAGjg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
