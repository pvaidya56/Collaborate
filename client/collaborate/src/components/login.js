import React, { useState } from 'react';
import { Link } from 'react-router-dom'

export default function Login() {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
        errors: {}
    });

    const onChange = e => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log("creds", credentials)
    }

    return (
        <div>
            <div>Login</div>
            <form onSubmit={e => onSubmit(e)}>
                <div>
                    <label>
                        <div>Username</div>
                        <input 
                            value={credentials.username}
                            name="username"
                            type="username"
                            onChange={e => onChange(e)}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <div>Password</div>
                        <input 
                            value={credentials.password}
                            name="password"
                            type="password"
                            onChange={e => onChange(e)}
                        />
                    </label>
                </div>

                <div>
                    <button type="submit">
                        Login
                    </button>
                </div>
                <div>
                    <Link to="/">
                        Don't have an account? Sign up.
                    </Link>
                </div>
                
            </form>
        </div>
    );
}
