import axios from "axios";

const url = "https://api.gather.town/api/v2";

export default {
  mapData: (params) => {
    let space = encodeURIComponent(`${params.spaceId}\\${params.mapName}`);

    return axios({
      method: "GET",
      baseURL: url,
      url: `/spaces/${space}/maps`,
      headers: {
        apiKey: params.apiKey,
      },
    });
  },
};
