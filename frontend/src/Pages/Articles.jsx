import { FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { FaSearchengin } from "react-icons/fa6";
import React, { useState } from 'react'

function Articles() {

    const [age, setAge] = useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault()
    }

    return (
        <div className='flex flex-col gap-6'>
            <section className='flex flex-col items-center gap-4 md:flex-row md:justify-between p-4'>
                <TextField
                    placeholder='Search articles...'
                    variant='outlined'
                    id='search-bar'
                    InputProps={{
                        endAdornment: (
                            < InputAdornment position="end" >
                                <FaSearchengin
                                    className='cursor-pointer text-lg'
                                    onClick={handleSearch}
                                />
                            </InputAdornment>
                        )
                    }
                    }
                    sx={{
                        width: "50%",
                        border: "2px solid transparent",
                        borderRadius: "1.9rem"
                    }}
                />
                <FormControl
                    sx={{
                        width: "25%"
                    }}
                >
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </section>
            <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

            </main>
        </div >
    )
}

export default Articles