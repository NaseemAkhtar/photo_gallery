import axios from "axios";

export const getRandomRepo = (params) => {
  return axios({
    method: "GET",
    url: `https://api.unsplash.com/photos/random?client_id=eoIQ5pR2tA5Agvr16qhfLE-pmGOJv5idJeNFGjjKbmY`,
    params: params,
  });
};

export const getHomeRepo = (params) => {
    return axios({
      method: "GET",
      url: `https://api.unsplash.com/photos/?client_id=eoIQ5pR2tA5Agvr16qhfLE-pmGOJv5idJeNFGjjKbmY`,
      params: params,
    });
};

export const getSearchRepo = (params) => {
    return axios({
      method: "GET",
      url: `https://api.unsplash.com/search/photos/?client_id=eoIQ5pR2tA5Agvr16qhfLE-pmGOJv5idJeNFGjjKbmY`,
      params: params,
    });
};


