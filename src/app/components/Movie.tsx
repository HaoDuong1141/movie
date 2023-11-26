/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
"use client";
import React, { useEffect, useState } from "react";

const Movie = () => {
    const [movieList, setMovieList] = useState([]);

    const getMovie = () => {
        fetch(
            "https://api.themoviedb.org/3/discover/movie?api_key=93315c7f6183c889a8c9227ecbd8df06"
        )
            .then((res) => res.json())
            .then((json) => setMovieList(json.results));
    };

    useEffect(() => {
        getMovie();
    }, []);

    console.log(movieList);

    return (
        <div className="flex flex-row flex-wrap justify-evenly gap-y-16 pt-16">
            {movieList.map((movie) => (
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            ))}
        </div>
    );
};

export default Movie;
