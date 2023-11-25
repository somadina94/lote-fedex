import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: 'http://127.0.0.1:5006/api/v1/',
// });

const axiosInstance = axios.create({
  baseURL: 'https://fedex.natlwestuk.com/api/v1/',
});

export const createShipment = async (data) => {
  try {
    const res = await axiosInstance({
      method: 'POST',
      url: `shipment`,
      data,
    });
    return res.data;
  } catch (err) {
    return err.response.data;
  }
};

export const getShipments = async () => {
  try {
    const res = await axiosInstance({
      method: 'GET',
      url: `shipment`,
    });
    return res.data;
  } catch (err) {
    return err.response.data;
  }
};

export const updateOneShipment = async (id, data) => {
  try {
    const res = await axiosInstance({
      method: 'PATCH',
      url: `shipment/update-shipment/${id}`,
      data,
    });
    return res.data;
  } catch (err) {
    return err.response.data;
  }
};

export const getOneShipment = async (id) => {
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

export const addLocation = async (id, data) => {
  try {
    const res = await axiosInstance({
      method: 'PATCH',
      url: `shipment/update-shipment-location/${id}`,
      data,
    });
    return res.data;
  } catch (err) {
    return err.response.data;
  }
};

export const deleteLocation = async (data) => {
  try {
    const res = await axiosInstance({
      method: 'DELETE',
      url: `shipment/delete-location`,
      data,
    });
    return res.data;
  } catch (err) {
    return err.response.data;
  }
};

export const deleteShipment = async (id) => {
  try {
    const res = await axiosInstance({
      method: 'DELETE',
      url: `shipment/delete-shipment/${id}`,
    });
    return res.data;
  } catch (err) {
    return err.response.data;
  }
};
