import React from 'react'
import './SignIn.scss';

const SignIn = () => {
    return(
        <div class="form">
            
            <div class="tab-content">
                <div id="signup">   
                    <h1>Sign Up </h1>
                    <form action="/" method="post">
                        <div class="top-row">
                            <div class="field-wrap">
                            <label>
                                First Name<span class="req">*</span>
                            </label>
                            <input type="text" required autocomplete="off" />
                            </div>
                        
                            <div class="field-wrap">
                            <label>
                                Last Name<span class="req">*</span>
                            </label>
                            <input type="text"required autocomplete="off"/>
                            </div>
                        </div>
                        <div class="field-wrap">
                            <label>
                            Email Address<span class="req">*</span>
                            </label>
                            <input type="email"required autocomplete="off"/>
                        </div>
                        <div class="field-wrap">
                            <label>
                             Password<span class="req">*</span>
                            </label>
                            <input type="password"required autocomplete="off"/>
                        </div>
                        <div className = 'row btn-container'>
                            <button className = 'btn login-btn lighten-1 z-depth-0'>Sign up</button>
                        </div>
                    </form>
                </div>
            </div> 
        </div>
    )
}

export default SignIn;