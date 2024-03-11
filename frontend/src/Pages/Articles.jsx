import { FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { FaSearchengin } from "react-icons/fa6";
import React, { useState } from 'react'
import Article from '../Components/Article/Article';

const articles = [
    {
        _id: 1,
        title: "Title 1",
        overview: "Overview 1 is great to have and to love",
        img: "https://www.shutterstock.com/shutterstock/photos/300112205/display_1500/stock-vector-mental-health-disorders-and-work-related-stress-anxiety-and-depression-symptoms-icons-set-abstract-300112205.jpg"
    },
    {
        _id: 2,
        title: "Title 2",
        overview: "Overview 2 is great to have and not to love",
        img: "https://www.shutterstock.com/shutterstock/photos/300112205/display_1500/stock-vector-mental-health-disorders-and-work-related-stress-anxiety-and-depression-symptoms-icons-set-abstract-300112205.jpg"
    },
    {
        _id: 3,
        title: "Title 3",
        overview: "Overview 3 is great to have and to love",
        img: "https://www.shutterstock.com/shutterstock/photos/300112205/display_1500/stock-vector-mental-health-disorders-and-work-related-stress-anxiety-and-depression-symptoms-icons-set-abstract-300112205.jpg"
    },
    {
        _id: 4,
        title: "Title 4",
        overview: "Overview 4 is great to have and not to love",
        img: "https://www.shutterstock.com/shutterstock/photos/300112205/display_1500/stock-vector-mental-health-disorders-and-work-related-stress-anxiety-and-depression-symptoms-icons-set-abstract-300112205.jpg"
    },
    {
        _id: 5,
        title: "Title 5",
        overview: "Overview 5 is great to have and not to love",
        img: "https://www.shutterstock.com/shutterstock/photos/300112205/display_1500/stock-vector-mental-health-disorders-and-work-related-stress-anxiety-and-depression-symptoms-icons-set-abstract-300112205.jpg"
    },
    {
        _id: 6,
        title: "Title 6",
        overview: "Overview 6 is great to have and to love",
        img: "https://www.shutterstock.com/shutterstock/photos/300112205/display_1500/stock-vector-mental-health-disorders-and-work-related-stress-anxiety-and-depression-symptoms-icons-set-abstract-300112205.jpg"
    },
]

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
            <main className='w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 place-items-center p-3'>
                {
                    articles.map((article) => (
                        <Article
                            key={article._id}
                            article={article}
                        />
                    ))
                }
            </main>
        </div >
    )
}

export default Articles