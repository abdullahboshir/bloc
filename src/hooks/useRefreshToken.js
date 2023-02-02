import axios from "../api/axios";
import useAuth from "./useAuth";


const useRefreshToken = () => {
    const {setAuth} = useAuth();

    const refresh = async () => {
        const response = await axios.get('/user/me', {
            withCredentials: true
        });
        setAuth(prev => {
            console.log(JSON.stringify(prev))
            console.log(response.data)
        })
    }
    
    return (
        <div>
            
        </div>
    );
};

export default useRefreshToken;