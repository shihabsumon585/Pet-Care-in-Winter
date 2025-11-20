import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';


const Login = () => {

    const { userLogin, setUser } = useContext(AuthContext);
    const location = useLocation();
    // console.log("login pages", location);
    const navigate = useNavigate();
    // console.log("login navigate", navigate);

    const handleLogIn = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);

        userLogin(email, password)
            .then((result) => {
                // console.log(result);
                setUser(result.user);
                navigate(`${location.state ? location.state : "/"}`);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className="card-body bg-white flex justify-center items-center w-fit mx-auto mt-10 p-10 rounded-xl">
            <title>Login</title>
            <h1 className='text-2xl font-bold mb-6'>Login your account</h1>
            <form onSubmit={handleLogIn}>
                <fieldset className="fieldset *:w-80">
                    {/* email */}
                    <label className="label">Email</label>
                    <input name='email' type="email" className="input" placeholder="Enter your email address" />
                    {/* password */}
                    <label className="label">Password</label>
                    <input name='password' type="password" className="input" placeholder="Enter your password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button type='submit' className="btn bg-accent text-base-100 mt-4">Login</button>
                </fieldset>
            </form>
            <p>Dont’t Have An Account ? <Link className='text-secondary' to={"/register"}>Register</Link></p>
        </div>
    );
};

export default Login;