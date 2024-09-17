import axios from "axios";
const axiosSecure = axios.create({
    baseURL: 'https://mess-traker-server.vercel.app/',
});
const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;


