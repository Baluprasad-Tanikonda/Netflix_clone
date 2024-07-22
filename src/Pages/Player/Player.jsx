// /** @format */

// import React, { useEffect } from "react";
// import "./Player.css";
// import back_arrow_icon from "../../Assets/back_arrow_icon.png";
// import { useNavigate, useParams } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { fetchMovieDetails } from "./../../Components/Store/Reducer";
// import { useSelector } from "react-redux";

// const Player = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { movieDetails, status, error } = useSelector(
//     (state) => state.movieDetails
//   );

//   useEffect(() => {
//     dispatch(fetchMovieDetails(id));
//   }, [dispatch, id]);

//   if (status === "loading") {
//     return <div>Loading...</div>;
//   }

//   if (status === "failed") {
//     return <div>{error}</div>;
//   }

//   return (
//     <div className="player">
//       <img
//         src={back_arrow_icon}
//         alt=""
//         onClick={() => {
//           navigate(-2);
//         }}
//       />
//       <iframe
//         width="90%"
//         height="90%"
//         src={`https://www.youtube.com/embed/${movieDetails.key}`}
//         title="trailer"
//         frameBorder="0"
//         allowFullScreen
//       ></iframe>
//       <div className="player-info">
//         <p>
//           {movieDetails.published_at
//             ? movieDetails.published_at.slice(0, 10)
//             : "N/A"}
//         </p>
//         <p>{movieDetails.name}</p>
//         <p>{movieDetails.type}</p>
//       </div>
//     </div>
//   );
// };

// export default Player;
