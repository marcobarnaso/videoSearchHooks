import axios from "axios";

const API_KEY = "AIzaSyAHhp6pn72yNgq_Xw6bqlgUFyu6zWi3fNQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    key: API_KEY,
    part: "snippet",
    type: "video",
    maxResults: 5,
  }
});
