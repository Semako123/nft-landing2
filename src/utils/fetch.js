import axios from "axios";

const fetchData = async (url) => {
  const response = await axios.get(url, {
    headers: {
      "x-api-key": process.env.REACT_APP_OPENSEA_API_KEY,
      // "Access-Control-Allow-Origin": "*",
    },
  });

  return response.data;
};

export default fetchData;
