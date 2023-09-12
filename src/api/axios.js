import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "40b6a689d5530502bd72ee6685be0538",
    language: "ko-KR",
  },
});

export default instance;
