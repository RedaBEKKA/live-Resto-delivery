import axios from "axios";
import {API_URL_DEV} from '@env';


const api = async (id,token) => {

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const res = await axios.get(`${API_URL_DEV}/order/${id}`,config);
  return res;
};
const profileService = {
  api,
};
export default profileService;
