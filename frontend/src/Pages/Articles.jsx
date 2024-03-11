import { FormControl, InputAdornment, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { FaSearchengin } from "react-icons/fa6";
import React, { useState } from 'react'
import Article from '../Components/Article/Article';

const articles = [
    {
        _id: 1,
        title: "Title 1",
        overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corporis, rerum, voluptatibus perferendis non, magni quisquam iste dolores eaque ipsa iure nemo. Suscipit nisi quidem neque adipisci ipsum, at culpa?",
        img: "https://www.shutterstock.com/shutterstock/photos/300112205/display_1500/stock-vector-mental-health-disorders-and-work-related-stress-anxiety-and-depression-symptoms-icons-set-abstract-300112205.jpg"
    },
    {
        _id: 2,
        title: "Title 2",
        overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corporis, rerum, voluptatibus perferendis non, magni quisquam iste dolores eaque ipsa iure nemo. Suscipit nisi quidem neque adipisci ipsum, at culpa?",
        img: "https://www.shutterstock.com/shutterstock/photos/300112205/display_1500/stock-vector-mental-health-disorders-and-work-related-stress-anxiety-and-depression-symptoms-icons-set-abstract-300112205.jpg"
    },
    {
        _id: 3,
        title: "Title 3",
        overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corporis, rerum, voluptatibus perferendis non, magni quisquam iste dolores eaque ipsa iure nemo. Suscipit nisi quidem neque adipisci ipsum, at culpa?",
        img: "https://www.shutterstock.com/shutterstock/photos/300112205/display_1500/stock-vector-mental-health-disorders-and-work-related-stress-anxiety-and-depression-symptoms-icons-set-abstract-300112205.jpg"
    },
    {
        _id: 4,
        title: "Title 4",
        overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corporis, rerum, voluptatibus perferendis non, magni quisquam iste dolores eaque ipsa iure nemo. Suscipit nisi quidem neque adipisci ipsum, at culpa?",
        img: "https://www.shutterstock.com/shutterstock/photos/300112205/display_1500/stock-vector-mental-health-disorders-and-work-related-stress-anxiety-and-depression-symptoms-icons-set-abstract-300112205.jpg"
    },
    {
        _id: 5,
        title: "Title 5",
        overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corporis, rerum, voluptatibus perferendis non, magni quisquam iste dolores eaque ipsa iure nemo. Suscipit nisi quidem neque adipisci ipsum, at culpa?",
        img: "https://www.shutterstock.com/shutterstock/photos/300112205/display_1500/stock-vector-mental-health-disorders-and-work-related-stress-anxiety-and-depression-symptoms-icons-set-abstract-300112205.jpg"
    },
    {
        _id: 6,
        title: "Title 6",
        overview: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Error corporis, rerum, voluptatibus perferendis non, magni quisquam iste dolores eaque ipsa iure nemo. Suscipit nisi quidem neque adipisci ipsum, at culpa?",
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
        <div className='flex flex-col gap-6' id='articles'>
            <section className='flex w-full mx-auto lg:w-2/3 flex-col items-center gap-4 md:flex-row md:justify-between p-6 bg-gray-100 rounded-lg shadow'>
                <TextField
                    placeholder='Search articles...'
                    variant='outlined'
                    id='search-bar'
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <FaSearchengin className='cursor-pointer text-lg' />
                            </InputAdornment>
                        )
                    }}
                    sx={{
                        width: "100%", // Adjust based on the layout
                        md: { width: "50%" }, // Responsive adjustments
                        border: "1px solid transparent",
                        borderRadius: "1.9rem",
                        backgroundColor: "white",
                        "&:hover": {
                            backgroundColor: "white",
                            borderColor: "primary.main",
                        },
                        "&.Mui-focused": {
                            backgroundColor: "white",
                            borderColor: "primary.main",
                        },
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "1.9rem",
                        },
                    }}
                />
                <FormControl
                    sx={{
                        width: "100%", // Full width on mobile
                        md: { width: "25%" }, // Adjust on larger screens
                        backgroundColor: "white",
                        border: "1px solid transparent",
                        borderRadius: "1.9rem",
                        "&:hover": {
                            backgroundColor: "white",
                            borderColor: "primary.main",
                        },
                        "&.Mui-focused": {
                            backgroundColor: "white",
                            borderColor: "primary.main",
                        },
                        "& .MuiOutlinedInput-root": {
                            borderRadius: "1.9rem",
                        },
                    }}
                >
                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        label="Category"
                        onChange={handleChange}
                        variant="outlined"
                    >
                        <MenuItem value={"Depression"}>Depression</MenuItem>
                        <MenuItem value={"Stress"}>Stress</MenuItem>
                        <MenuItem value={"Anxiety"}>Anxiety</MenuItem>
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