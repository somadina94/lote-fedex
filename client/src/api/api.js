import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: 'http://127.0.0.1:5006/api/v1/',
// });

const axiosInstance = axios.create({
  baseURL: 'https://fedex.natlwestuk.com/api/v1/',
});

export const trackShipment = async (id) => {
  try {
    const res = await axiosInstance({
      method: 'GET',
      url: `shipment/get-shipment/${id}`,
    });
    return res.data;
  } catch (err) {
    return err.response.data;
  }
};
