import React, { setState, useEffect } from 'react'

import SignIn from './SignIn'
import SignUp from './SignUp'

const Auth = () => {
    return(
        <div>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default Auth;