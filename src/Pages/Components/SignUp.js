import React, { useState } from 'react';
import { BsGoogle } from 'react-icons/bs'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const SignUp = ({ toggle, setToggle }) => {

    const [show, setShow] = useState(false)



    return (
        <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0 bg-white p-10 rounded-lg">
            <h1 className='text-center font-semibold text-3xl mb-4 text-violet-900'>Sign Up</h1>
            <form>
                <div className="flex flex-row items-center justify-center lg:justify-start">
                    <p className="text-lg mb-0 mr-4">Sign in with</p>



                    <button
                        type="button"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        className="inline-block p-3 bg-violet-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-violet-700 hover:shadow-lg focus:bg-violet-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                    >
                        {/* <!-- Linkedin --> */}
                        <BsGoogle />
                    </button>
                </div>

                <div
                    className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                >
                    <p className="text-center font-semibold mx-4 mb-0">Or</p>
                </div>

                {/* <!-- Name input --> */}
                <div className="mb-6">
                    <input
                        type="text"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none"
                        id="exampleFormControlInput2"
                        placeholder="Name"
                        required
                    />
                </div>
                {/* <!-- Email input --> */}
                <div className="mb-6">
                    <input
                        type="text"
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none"
                        id="exampleFormControlInput2"
                        placeholder="Email address"
                        required
                    />
                </div>

                {/* <!-- Password input --> */}
                <div className="mb-6">
                    <input
                        type={show ? "text" : "password"}
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none"
                        id="exampleFormControlInput2"
                        placeholder="Password"
                        required
                    />
                </div>
                {/* <!--Confirm Password input --> */}
                <div className="mb-6">
                    <input
                        type={show ? "text" : "password"}
                        className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-violet-600 focus:outline-none"
                        id="exampleFormControlInput2"
                        placeholder="Confirm Password"
                        required
                    />
                </div>

                <div className="flex justify-between items-center mb-6">
                    <div className="form-group form-check">
                        {show ? <AiOutlineEyeInvisible className='text-xl cursor-pointer' onClick={() => setShow(!show)} />
                            :
                            <AiOutlineEye className='text-xl cursor-pointer' onClick={() => setShow(!show)} />
                        }
                    </div>

                </div>

                {/* File Input */}
                <div class="flex justify-start mb-3">
                    <div class="mb-3 w-96">
                        <label className='mb-2'>Upload your picture</label>
                        <input
                            className="m-0 w-full min-w-0 flex justify-start cursor-pointer rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out file:-mx-3 file:-my-1.5 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-1.5 file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:bg-white focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:bg-transparent dark:text-neutral-200 dark:focus:bg-transparent"
                            type="file"
                            id="formFileMultiple"
                            required
                        />
                    </div>
                </div>

                <div className="text-center lg:text-left">
                    <button
                        type="button"
                        data-mdb-ripple="true"
                        className="inline-block px-7 py-3 bg-violet-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-violet-700 hover:shadow-lg focus:bg-violet-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-violet-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                        Sign up
                    </button>
                    <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                        Already have an account?
                        <span onClick={() => setToggle(!toggle)}
                            className="ml-2 text-violet-600 hover:text-violet-700 focus:text-violet-700 transition duration-200 ease-in-out cursor-pointer"
                        >Login</span>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default SignUp;