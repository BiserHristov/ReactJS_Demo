import React from 'react'
import { NavLink, Outlet } from 'react-router-dom';

const Test = () => {
    return (
        <main className='main-container'>
            <h1>Test</h1>
            <NavLink to='/test/all'>All</NavLink>
            <NavLink to='/test/bundles'>Bundles</NavLink>
            <Outlet />
        </main>

    )
}

export default Test;
