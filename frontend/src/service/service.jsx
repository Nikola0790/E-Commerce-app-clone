import axios from "axios";

const url = "http://127.0.0.1:5000";

export const getAllProducts = async () => {
   const data = await axios.get(`${url}/api/products`);
   return data;
}
