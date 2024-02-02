import React, { useState, useEffect } from 'react'
import MoviePoster from './MoviePoster';
import { token } from '../apiLinks';
import "../styles/carousalCard.css";

function CarousalCard(props) {

    const apiUrl = `https://api.themoviedb.org/3/movie/${props.movieId}?language=en-US`;
    const creditsUrl = `https://api.themoviedb.org/3/movie/${props.movieId}/credits?language=en-US`


    const [data, setData] = useState({
        items: [],
        isLoaded: false,
    });
    const [credits, setCredits] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${token}`
                }
            };

            try {
                const response = await fetch(apiUrl, options);
                const json = await response.json();

                setData({
                    isLoaded: true,
                    items: json,
                });

            } catch (error) {
                console.error('Error fetching data:', error);
            }

            try {
                const response = await fetch(creditsUrl, options);
                const json = await response.json();

                setCredits(json.crew);

            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [apiUrl]);

    const directors = credits.filter(person => person.job === "Director");
    const directorNames = directors.map(director => director.name);


    console.log("this is the credit data : ",data);
    return (
        data.isLoaded ? (

            <div className='carousalContainer'>
                <div className='carousalImgContainer'>
                    <MoviePoster givenClass='carousalImg' movieId={props.movieId} />
                </div>
                <div className='carousalContent'>
                        <h2>{data.items.title}</h2>
                    <div className='dateAndRate'>
                        <p>{data.items.release_date}</p>
                        <p>{data.items.rate}</p>
                    </div>
                    <div className='subContent'>
                        <p>{directorNames}</p>
                        <p>Genres: {data.items.genres.map(genre => genre.name).join(', ')}</p>
                        <p className='overview'>{data.items.overview}</p>
                    </div>
                </div>
            </div>

        ) : null
    );

}

export default CarousalCard;