import React from 'react'
import './SignIn.scss';

const SignIn = () => {
    return(
        <div class="form">
            <h1>Login</h1>
            <form action="/" method="post">
                <div className = 'input-container'>
                    <div class="field-wrap">
                        <label>
                            Email <span class="req"></span>
                        </label>
                        <input type="email"required autocomplete="off"/>
                    </div>
                    <div class="field-wrap">
                        <label>
                            Password<span class="req"></span>
                        </label>
                        <input type="password"required autocomplete="off"/>
                    </div>
                </div>
            
                <div className = 'row btn-container'>
                    <button className = 'btn login-btn #313131 lighten-1 z-depth-0'>Log in</button>
                    <button className = 'btn  signup-btn lighten-1 z-depth-0'>Sign up</button>
                </div>
                <p class="forgot"><a href="#">Forgot Password?</a></p>
            </form>
        </div> 
    )
}

export default SignIn;