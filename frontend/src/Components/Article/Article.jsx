import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import './article.css'

function Article(props) {

    const { title, overview, img } = props.article

    return (
        <div className="card max-w-lg shadow-xl md:max-w-max bg-cover" style={{ backgroundImage: `url('${img}')` }}>
            <div className="card-content w-full relative">
                <section className='card-title w-full flex justify-between items-center'>
                    <h2 className=''>{title}</h2>
                </section>
                <p className="card-body">
                    {overview}
                </p>
                <FaLongArrowAltRight
                    className='absolute bottom-2 text-white right-2 text-3xl'
                />
            </div>
        </div>
    )
}

export default Article