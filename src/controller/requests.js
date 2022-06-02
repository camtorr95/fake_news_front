const axios = require("axios");

const predict = async (payload) => {
  let res = await axios.post(
    "http://localhost:5000/fake_news/predict",
    payload
  );
  let data = res.data;
  console.log(data);

  return data;
};

export default predict;
