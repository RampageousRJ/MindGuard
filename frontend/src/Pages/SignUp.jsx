import React from 'react'
import { Link } from 'react-router-dom'
import { Button, TextField } from '@mui/material'
import { motion, animate } from 'framer-motion'

function SignUp() {

    const handleSubmit = (e) => {

    }


    return (
        <motion.main
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .5 }}
        >
            <main className='min-h-screen flex justify-center items-center  '>
                <form action="" className='flex flex-col gap-8 min-w-96 text-lg md:text-xl shadow-xl px-8 py-14 text-center rounded-lg'>
                    <h1 className='text-xl md:text-4xl roboto-bold text-blue-400'>Register</h1>
                    <TextField
                        id='username'
                        type='string'
                        label="Username"
                        variant='outlined'
                        color='primary'
                        sx={{
                            width: "100%"
                        }}
                    />
                    <TextField
                        id='email'
                        label="Email"
                        type='email'
                        variant='outlined'
                        color='primary'
                        sx={{
                            width: "100%"
                        }}
                    />
                    <TextField
                        id='password'
                        label="Password"
                        type='password'
                        variant='outlined'
                        color='primary'
                        sx={{
                            width: "100%"
                        }}
                    />
                    <Button
                        onClick={handleSubmit}
                        variant='contained'
                        color='primary'
                    >
                        Register
                    </Button>
                    <section className='flex justify-between items-center'>
                        <i className='text-lg'>Already have an account?</i>
                        <Link to={"/signin"}>
                            <span className='text-blue-500 cursor-pointer'>Sign In</span>
                        </Link>
                    </section>
                </form>
            </main>
        </motion.main>
    )
}

export default SignUp