import React, { useContext } from 'react';
import Usercontext from '../Context/Usercontext';
function Profile() {
    const { user } = useContext(Usercontext);

    if (!(user?.username)) return <h1 className="text-center my-7">Plz Login</h1>

    if (user) return (

        <div className="text-center">
            <br />
            <h1>Welcome {user?.username}</h1>
            <br />
            <h1>Usernem:- {user?.username}</h1>
            <h1>password:- {user?.password}</h1>
        </div>

    );
}

export default Profile;