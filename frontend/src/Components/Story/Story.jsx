import React from 'react'
import { RxAvatar } from "react-icons/rx";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import './story.css'
import { Button } from '@mui/material';

function Story(props) {

    const { name, overview, date, title, comments, likes } = props.story

    return (
        <div className='story min-h-64 w-96 flex flex-col gap-6 text-black p-6 shadow-2xl rounded-3xl'>
            <section className='flex justify-between items-center border-b-2 border-slate-500'>
                <div className='flex gap-3 items-center'>
                    <RxAvatar
                        className='text-2xl'
                    />
                    <h1 className='text-2xl'>{name}</h1>
                </div>
                <i>{date}</i>
            </section>
            <section className='flex justify-between items-center'>
                <h1 className='text-xl roboto-bold'>{title}</h1>
                <div className='flex flex-col gap-1'>
                    <AiOutlineLike />
                    <strong>{likes}</strong>
                </div>
            </section>
            <p>{overview}</p>
            <section className='flex items-center justify-between'>
                <Button
                    variant='contained'
                    color='primary'
                    sx={{
                        backgroundColor: "#477be4"
                    }}
                >
                    Read More
                </Button>
                <div className='flex gap-1 items-center'>
                    <FaRegCommentDots />
                    <p>{`(${comments})`}</p>
                </div>
            </section>
        </div>
    )
}

export default Story