import {useState, useEffect} from 'react';

const Users = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async () => {
            try {
                const response = await axios.get('/users', {
                    signal: controller.signal
                });
                console.log(response.data)
                isMounted && setUsers(response.data);
            } catch (error) {
                console.error(error)
            }
        };

        getUsers();

        return () => {
            isMounted = false;
            controller.abort();
        };
    }, [])

    return (
        <article>
            <h2 className='text-2xl'>Users List</h2>
            {users?.length}
            ? (
                <ul>
                    {users.map((user, i) => <li key={i}>{user?.name}</li>)}
                </ul> : <p>Users not found</p>
            )
        </article>
    );
};

export default Users;




const { users, setUsers } = useAuthContext();
// const [users, setUsers] = useState('');

// const ok = {...token}
// console.log('this copyyyyyyyyyyy', ok)


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
                    console.log('this copyyyyyyyyyyy', response)
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
