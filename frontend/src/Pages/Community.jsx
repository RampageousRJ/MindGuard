import React from 'react'
import Story from '../Components/Story/Story'
import { motion } from 'framer-motion'

const stories = [
    {
        _id: 0,
        name: "Swapnil Jha",
        overview: "This is one of the best overview's i have ever seen i could not even sleep",
        title: "Title 1",
        likes: 32,
        comments: 12,
        date: "June 8, 2024"
    },
    {
        _id: 1,
        name: "Swapnil Jha",
        overview: "This is one of the best overview's i have ever seen i could not even sleep",
        title: "Title 1",
        likes: 32,
        comments: 12,
        date: "June 8, 2024"
    },
    {
        _id: 2,
        name: "Swapnil Jha",
        overview: "This is one of the best overview's i have ever seen i could not even sleep",
        title: "Title 1",
        likes: 32,
        comments: 12,
        date: "June 8, 2024"
    },
    {
        _id: 3,
        name: "Swapnil Jha",
        overview: "This is one of the best overview's i have ever seen i could not even sleep",
        title: "Title 1",
        likes: 32,
        comments: 12,
        date: "June 8, 2024"
    },
    {
        _id: 4,
        name: "Srijan Raj",
        overview: "This is one of the best overview's i have ever seen i could not even sleep",
        title: "Title 3",
        likes: 33,
        comments: 12,
        date: "June 8, 2024"
    },
    {
        _id: 5,
        name: "Swapnil Jha",
        overview: "This is one of the best overview's i have ever seen i could not even sleep",
        title: "Title 4",
        likes: 32,
        comments: 12,
        date: "June 8, 2024"
    },
    {
        _id: 6,
        name: "Rasagnya Bethi",
        overview: "This is one of the best overview's i have ever seen i could not even sleep",
        title: "Title 5",
        likes: 32,
        comments: 12,
        date: "June 8, 2024"
    }
]

function Community() {
    return (
        <main className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center p-10 gap-6'>
            {
                stories.map((story) => (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 * story._id }}
                    >
                        <Story key={story._id} story={story} />
                    </motion.div>
                ))
            }
        </main>
    )
}

export default Community