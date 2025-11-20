import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Loading = () => {

    // const { loading } = useContext(AuthContext);
    // if(loading) {
    //     return <Loading></Loading>
    // }

    return <div className='flex justify-center items-center min-h-screen'>
        <span className="loading loading-bars loading-xl"></span>
    </div>;
};

export default Loading;