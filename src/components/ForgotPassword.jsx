import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const ForgotPassword = () => {
    const { resetPassword } = useContext(AuthContext);
    const handleForgot = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        resetPassword(email)
            .then((u)=>{
                console.log(u);
                toast("Reset password link sent to your email")
                window.open("https://mail.google.com/", "_blank");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
        e.target.reset();
    }
    const email = localStorage.getItem("email");
    console.log(email);
    return (
        <div className='mx-auto '>
            <ToastContainer></ToastContainer>
            <h1 className='text-2xl font-bold my-10 text-center '>Reset Password</h1>
            <form className='flex justify-center' onSubmit={handleForgot}>
                <fieldset className="fieldset *:w-80">
                    {/* email */}
                    <label className="label">Email</label>
                    <input name='email' value={email} type="email" className="input" placeholder="Enter your email address" required/>
                    <button type='submit' className="btn bg-accent text-base-100 mt-4">Reset Password</button>
                </fieldset>
            </form>
        </div>
    );
};

export default ForgotPassword;