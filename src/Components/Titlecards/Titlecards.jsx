/** @format */

import React, { useEffect, useRef, useState } from "react";
import "./Titlecards.css";
import cards_data from "../../Assets/cards/Cards_data";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./../Store/Reducer";

const Titlecards = ({ title, category }) => {
  const dispatch = useDispatch();
  const cardsRef = useRef();
  const { movies, status, error } = useSelector((state) => state.movies);

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    dispatch(fetchMovies(category));
    cardsRef.current.addEventListener("wheel", handleWheel);
    return () => {
      cardsRef.current.removeEventListener("wheel", handleWheel);
    };
  }, [category, dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>{error}</div>;
  }

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {movies.map((card, index) => {
          return (
            <Link to={`/Player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt=""
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Titlecards;
