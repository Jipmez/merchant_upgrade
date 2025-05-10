import { API_URL, APP_VERSION } from "./app_constants";
const apiUrl = API_URL;
const appVersion = APP_VERSION
const apiRoute = "/api/";
const baseURL = apiUrl + apiRoute + appVersion;


const axiosInstance = axios.create({
    baseURL: baseURL,
  });

//   Authorization: `Bearer ${token}`

if(localStorage.getItem('auth')){
    axiosInstance.interceptors.request.use(
        (config) => {
          const token = JSON.parse(localStorage.getItem('auth')).state.access_token;
          const customHeader = `Bearer ${token}`;
          config.headers['Authorization'] = customHeader;
          return config;
        },
        (error) => {
          return Promise.reject(error);
        }
      );
}




async function get(path, headers) { return await axiosInstance.get(baseURL + path, {headers}) };

async function post(path, data) { return await axiosInstance.post(baseURL + path, data) };

//const put = (path, data) => axios.put(baseURL + path, data);

async function getNoApi(path, headers) { return await axios.get(apiUrl + path, headers) };

export default {
    get,
    post,
    getNoApi,
    // put,
}



