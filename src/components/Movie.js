import React from 'react'
import propTypes from "prop-types"
import {Link} from "react-router-dom"

function Movie({id, year, title, summary, poster, genres}){
    return (
        <Link
        to = {{
            pathname: `/movie/${id}`,
            state:{
                year, title, summary, poster, genres
            }
        }}>
            <div className="movie">
                <div className="movie__data">
                    <img className="img" src={poster} alt={title} title={title}/>
                    <div className="desc">
                        <h3 className="movie_title">{title}</h3>
                        <h5 className="movie_year">{year}, 
                            {genres.map(genre => <span> {genre}</span>)}
                        </h5>
                        <p>{summary.slice(0,400)}...</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired
}

export default Movie