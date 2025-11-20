import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';


const Register = () => {
    const { createUser, setUser, updateUser } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleCreateUser = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name, photo, email, password);

        createUser(email, password)
            .then((result) => {
                // console.log(result);

                updateUser({displayName: name, photoURL: photo})
                
                setUser({...result.user, displayName: name, photoURL: photo});
                navigate("/");
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="card-body bg-white flex justify-center items-center w-fit mx-auto mt-4 p-10 rounded-xl">
            <title>SignUp</title>
            <h1 className='text-2xl font-bold mb-4'>SignUp your account</h1>
            <form onSubmit={handleCreateUser}>
                <fieldset className="fieldset *:w-80">
                    {/* Name */}
                    <label className="label">Your Name</label>
                    <input name='name' type="text" className="input" placeholder="Enter your name" />
                    {/* email */}
                    <label className="label">Email</label>
                    <input name='email' type="email" className="input" placeholder="Enter your email address" />
                    {/* Photo URL */}
                    <label className="label">Photo URL</label>
                    <input name='photo' type="text" className="input" placeholder="Enter the photo URL" />
                    {/* password */}
                    <label className="label">Password</label>
                    <input name='password' type="password" className="input" placeholder="Enter your password" />
                    <button type='submit' className="btn bg-accent text-base-100 mt-4">SignUp</button>
                </fieldset>
            </form>
            <p>Already have An Account ? <Link className='text-secondary' to={"/login"}>Login</Link></p>
        </div>
    );
};

export default Register;