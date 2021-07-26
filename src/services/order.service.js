import axios from "axios";

export function fetchOrder(page = 0) {
  return axios.get(`${process.env.REACT_APP_API}/orders?_start=${page}&_limit=${process.env.REACT_APP_PAGE_SIZE}`);
}


