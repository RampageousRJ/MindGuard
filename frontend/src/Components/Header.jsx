import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='flex items-center justify-between py-4 px-8 border-b-4 border-blue-400'>
            <Link to={"/"}>
                <section className='text-xl md:text-3xl text-white  p-2 bg-blue-2 max-w-sm roboto-bold rounded-lg'>MindGaurd</section>
            </Link>
            <nav className='flex justify-around md:gap-x-16 items-center text-blue-2 roboto-medium md:text-lg'>
                <Link to={"/"}>Home</Link>
                <Link to={"/articles"}>Articles</Link>
                <Link to={"/dass"}>DASS-42</Link>
                <Link to={"/community"}>Community</Link>
            </nav>
            <Link to={"/signin"}>
                <Button variant="contained">Sign In</Button>
            </Link>
        </header>
    )
}

export default Header