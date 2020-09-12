import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        errors: {}
    });
    
    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmit = e => {
        e.preventDefault();
        console.log("user", user);
    }

    return (
        <div>
            <div>Register: </div>
            <form onSubmit={e => onSubmit(e)}>
                <div>
                    <label>
                        <div>Username</div>
                        <input
                            value={user.username}
                            name="username"
                            // error={errors.name}
                            type="text"
                            onChange={e => onChange(e)}
                        />
                        {/* <div>{errors.name}</div> */}
                    </label>
                </div>
                <div>
                    <label>
                        <div>Email</div>
                        <input
                            value={user.email}
                            name="email"
                            // error={errors.name}
                            type="email"
                            onChange={e => onChange(e)}
                        />
                        {/* <div>{errors.name}</div> */}
                    </label>
                </div>
                <div>
                    <label>
                        <div>Password</div>
                        <input
                            value={user.password}
                            name="password"
                            type="password"
                            onChange={e => onChange(e)}
                        />
                    </label>
                </div>

                <div>
                    <button type="submit">
                        Register
                    </button>
                </div>
                <div>
                    <Link to="/login">
                        Already have an account? Login.
                    </Link>
                </div>
                
            </form>
        </div>
    );
}
