import React from 'react'
import PropTypes from 'prop-types'

const Login = (props) => (
    <nav className="login">
        <h2>Login</h2>
        <p>SIGN IN TO INVENTORY MANAGER</p>
        <button 
            className="facebook" 
            onClick={() => props.auth('Facebook')}>
            Log in with facebook
        </button>
        <button 
            className="twitter" 
            onClick={() => props.auth('Twitter')}>
            Log in with facebook
        </button>
        <button 
            className="github" 
            onClick={() => props.auth('Github')}>
            Log in with facebook
        </button>
    </nav>
)

Login.PropTypes = {
    auth: PropTypes.func.isRequired
}

export default Login