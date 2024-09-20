import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
const axiosSecure = axios.create({
    baseURL: 'https://mess-traker-server.vercel.app/',
    // baseURL: 'http://localhost:5000/',
});
const useAxiosSecure = () => {
    const navigate = useNavigate()
    const { logOut } = useContext(AuthContext)
    //request interceptors to secure ao add authorization header for every
    axiosSecure.interceptors.request.use(async function (config) {
        // Delay fetching the token for 500ms
        await new Promise(resolve => setTimeout(resolve, 500));
    
        const token = localStorage.getItem('access-token');
        if (token) {
            config.headers.authorization = `Bearer ${token}`;
        }
        
        return config;
    }, function (error) {
        // Handle request error
        return Promise.reject(error);
    });

    // interceptors for 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, async (error) => {
        const status = error.response.status;
        if (status === 401 || status === 403) {
            await logOut()
            navigate('/login')
        }
        return Promise.reject(error);
    });

    return axiosSecure
};

export default useAxiosSecure;


