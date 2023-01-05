import React from 'react';
import { BsGoogle } from 'react-icons/bs'
import { AiOutlineEye } from 'react-icons/ai'


const SignIn = ({ toggle, setToggle }) => {
    return (
        <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 bg-white p-10 rounded-lg">
            <h1 className='text-center font-semibold text-3xl mb-4 text-violet-900'>Login</h1>
            <form>
                <div class="flex flex-row items-center justify-center lg:justify-start">
                    <p class="text-lg mb-0 mr-4">Sign in with</p>



                    <button
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        class="inline-block p-3 bg-violet-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-violet-700 hover:shadow-lg focus:bg-violet-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                    >
                        {/* <!-- Linkedin --> */}
                        <BsGoogle />
                    </button>
                </div>

                <div
                    class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                >
                    <p class="text-center font-semibold mx-4 mb-0">Or</p>
                </div>

                {/* <!-- Email input --> */}
                <div class="mb-6">
                    <input
                        type="text"
                        class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none"
                        id="exampleFormControlInput2"
                        placeholder="Email address"
                    />
                </div>

                {/* <!-- Password input --> */}
                <div class="mb-6">
                    <input
                        type="password"
                        class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none"
                        id="exampleFormControlInput2"
                        placeholder="Password"
                    />
                </div>

                <div class="flex justify-between items-center mb-6">
                    <div class="form-group form-check">
                        <AiOutlineEye className='text-xl cursor-pointer' />
                    </div>

                </div>

                <div class="text-center lg:text-left">
                    <button
                        type="button"
                        data-mdb-ripple="true"
                        class="inline-block px-7 py-3 bg-violet-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-violet-700 hover:shadow-lg focus:bg-violet-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                        Login
                    </button>
                    <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                        Don't have an account?
                        <a onClick={() => setToggle(!toggle)}
                            href="#!"
                            class="ml-2 text-violet-600 hover:text-violet-700 focus:text-violet-700 transition duration-200 ease-in-out"
                        >Register</a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default SignIn;