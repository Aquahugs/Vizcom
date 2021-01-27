import React, { setState, useEffect } from 'react'
import '../LandingPage.scss';
import SignIn from './SignIn'
import SignUp from './SignUp'

import WhiteLogo from '../../../assets/logo-white.png'

const Auth = () => {
    return(
        <div className = 'content-container'>
            <div className = 'row'>
                <div className = 'left-area col s7 m7 l7'>
                    <img src = {WhiteLogo}/>
                    <p>Accelerate your creative process.</p>
                </div>
                <div className = 'auth-area col s5 m5 l5'>
                     {/* <SignIn /> */}
                     <SignUp />
                </div>
            </div>
            <div className = 'row info-container'>
                <div className = 'col s5 m5 l5'>
                    <h2>Vizcom is building tools that shorten 
                        the distance between having an idea and bringing it to life.
                    </h2>
                </div>
                <div className = 'col s7 m7 l7'>
                    <img src = "https://via.placeholder.com/850x750"/>
                </div>
            </div>
        </div>
       
        // <div>
        //     <SignIn />
        //     <SignUp />
        // </div>
    )
}

export default Auth;