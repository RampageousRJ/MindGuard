import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import './article.css'
import { useNavigate } from 'react-router-dom';

function Article(props) {

    const navigate = useNavigate()

    const handleGoToArticle = (e) => {
    }

    const { title, overview, img } = props.article

    return (
        <div className="card max-w-lg shadow-xl md:max-w-max bg-cover" style={{ backgroundImage: `url('${img}')` }}>
            <div className="card-content w-full relative">
                <h2 className='text-xl md:text-3xl roboto-bold'>{title}</h2>
                <p className="card-body">
                    {overview}
                </p>
                <a href="https://butterfly.org.au/" target='_blank'>
                    <FaLongArrowAltRight
                        className='absolute bottom-2 text-white right-2 text-3xl cursor-pointer'
                        onClick={handleGoToArticle}
                    />
                </a>
            </div>
        </div>
    )
}

export default Article