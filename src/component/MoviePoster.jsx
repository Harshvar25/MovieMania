import React, { useEffect, useState } from 'react';
import "../styles/section01.css";
import Section01Container from './Section01Container';

let movieUrl = '';

function MoviePoster(props) {
    const apiUrl = `https://api.themoviedb.org/3/movie/${props.movieId}/images?include_image_language=en&language=en`;
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOWY1MThiMDM0NjUzODM1MWIzYTVjODc1OWI4ODFiMSIsInN1YiI6IjY1OWQ2MDQzMjMxNjhjMDFhNTRhOGMzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QAHKoswysUZ1DfLYMftjqGKp9z-8HFsxNhYUmdKK1Ng'
                }
            };

            try {
                const response = await fetch(apiUrl, options);
                const json = await response.json();

                setData(json);
            } catch (error) {
                console.error("error fetching data:", error);
            }
        };
        fetchData();
    }, [apiUrl]);


    if (data.posters && data.posters.length > 0) {
        movieUrl = `https://image.tmdb.org/t/p/original/${data.posters[0].file_path}`;

        return (
            <div className={props.givenClass} style={{
                backgroundImage: `url(${movieUrl})`
            }}>
                {props.function === 'true' && <Section01Container />}
            </div>
        );
    }
}

export { MoviePoster, movieUrl }; 
