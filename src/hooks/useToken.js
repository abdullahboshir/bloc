import { useEffect, useState } from "react";
import axios from "../api/axios";
import { useAuthContext } from "../context/AuthContextProvider";



const useToken = (userInfo) => {

    const { users, setUsers } = useAuthContext();

    useEffect(() => {
        if (userInfo) {
            let isMounted = true;
            const controller = new AbortController();
            const emailOrPhoneNumber = userInfo?.user?.email;

            const getUsers = async () => {
                try {
                    const response = await axios.post('/user/googleLogin', {
                        emailOrPhoneNumber, signal: controller.signal
                    });
                    localStorage.setItem('accessToken', JSON.stringify(response.data.data))
                    isMounted && setUsers(response.data);
                } catch (error) {
                    console.log(error)
                }
            };
            getUsers();

            return () => {
                isMounted = false;
                controller.abort();
            };
        }
    }, [userInfo, setUsers, users])

    return users;

};


export default useToken;