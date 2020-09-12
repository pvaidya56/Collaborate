import React from 'react'
import { Link } from 'react-router-dom';

// Components
import TopNav from './TopNav';

export default function Layout() {
    return (
        <div>
            <TopNav />
            this is dashboard
            <Link to='/dashboard' />
        </div>
    )
}
