import axios from "axios";
import { getItem } from "../utils/AsyncStorage";

//import { API_ENDPOINT } from "../configs";
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
const api = axios.create({
  baseURL: API_ENDPOINT,
});

const getOptions = () => {
  const token = getItem("token");
  if (token) {
    return {
      "Content-Type": "application/json",
      headers: {
        Authorization: `token ${token}`,
        Accept: "application/json",
      },
    };
  } else {
    return {};
  }
};

const errorResponse = (error) => {
  const response = new Error(error.response.data.error);
  throw response;
};

export const eliminate = async (url, params = {}, headers = {}) => {
  try {
    const options = { ...getOptions(), ...headers };
    const { data } = await api.delete(url, params, options);
    return data;
  } catch (error) {
    throw errorResponse(error);
  }
};

export const put = async (url, params = {}, headers = {}) => {
  try {
    const options = { ...getOptions(), ...headers };
    const { data } = await api.put(url, params, options);
    return data;
  } catch (error) {
    throw errorResponse(error);
  }
};

export const post = async (url, params = {}, headers = {}) => {
  try {
    const options = { ...getOptions(), ...headers };
    const { data } = await api.post(url, params, options);
    return data;
  } catch (error) {
    throw errorResponse(error);
  }
};

export const get = async (url, headers = {}, params = {}) => {
  try {
    const options = { ...getOptions(), ...headers, params: params };
    const { data } = await api.get(url, options);
    return data;
  } catch (error) {
    throw errorResponse(error);
  }
};

export const getImage = async (url, headers = {}) => {
  try {
    const options = { ...getOptions(), ...headers, responseType: "blob" };
    const { data } = await api.get(url, options);
    return data;
  } catch (error) {
    throw errorResponse(error);
  }
};