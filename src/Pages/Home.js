import React, { useState } from 'react';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';

const Home = () => {

    const [toggle, setToggle] = useState(true)
    return (
        <div>
            <section class="h-screen pt-32">
                <div class="px-6 h-full text-gray-800">
                    <div class="flex marker:selection:xl:justify-center lg:justify-center justify-center items-center flex-wrap h-full g-6">

                        {toggle ?
                            <SignIn toggle={toggle} setToggle={setToggle} />
                            :
                            <SignUp toggle={toggle} setToggle={setToggle} />}


                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;