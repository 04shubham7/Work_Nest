import React from 'react';
import { useState } from 'react';

const Login = ({handleLogin}) => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        // Clear the input fields after submission

        setEmail('');
        setPassword('');
    };

    return (
        <div className="flex h-screen w-screen bg-black text-white">
            {/* Image Section */}
            <div className="flex-1 flex items-center justify-center">
                <img
                    src="https://i.pinimg.com/736x/00/ab/38/00ab38b9af71e36ea7f3fc43225e40bf.jpg" 
                    alt="Astronaut relaxing" 
                    className="h-auto max-w-screen object-cover ml-72"
                />
            </div>
            {/* Form Section */}
            <div className="flex-1 flex items-center justify-center">
                <div className="border-2 border-emerald-600 p-20 rounded-xl">
                    <form 
                        onSubmit={(e) => {
                            submitHandler(e);
                        }}
                        className="flex flex-col items-center justify-center"
                    >
                        <input
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            required
                            className="border-2 border-emerald-600 rounded-full px-5 py-3 text-xl text-white outline-none bg-transparent placeholder:text-gray-400 mt-3"
                            type="email"
                            autoComplete="email"
                            placeholder="Enter Your Email"
                        />
                        <input
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            required
                            className="border-2 border-emerald-600 rounded-full px-5 py-3 text-xl text-white outline-none bg-transparent placeholder:text-gray-400 mt-3"
                            type="password"
                            autoComplete="current-password"
                            placeholder="Enter Your Password"
                        />
                        <button 
                            className="border-none bg-emerald-500 rounded-full px-5 py-3 text-xl text-white outline-none mt-3 mb-3"
                        >
                            Log In
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;