const axios = require('axios');
require('dotenv').config();

exports.getLoacation = (query, cb) => {
  const { address } = query;
  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLE_MAP_API}`)
    .then(res => cb(null, res.data))
    .catch(process.stderr.write);
};

exports.getPlaces = (query, cb) => {
  const { location, radius, type, keyword } = query;
  axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&type=${type}&keyword=${keyword}&key=${process.env.GOOGLE_MAP_API}`)
    .then(res => cb(null, res.data))
    .catch(process.stderr.write);
};

exports.getDetails = (query, cb) => {
  const { placeid } = query;
  axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeid}&key=${process.env.GOOGLE_MAP_API}`)
    .then(res => cb(null, res.data))
    .catch(process.stderr.write);
};
