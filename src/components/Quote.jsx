import React from "react";

function Quote(props) {
  console.log(props);

  return (
    <div className="movie-card">
      <div className="movie-header">
        <img
          className="bladeRunner2049"
          src="http://cdn.collider.com/wp-content/uploads/2017/03/the-dark-tower-poster.jpg"
          alt=""
        />
      </div>
      <div className="movie-content">
        <div className="movie-content-header">
          <a href="#">
            <h3 className="movie-title">{props.value.movie}</h3>
          </a>
          <div className="imax-logo"></div>
        </div>
        <div className="movie-info">
          <div className="info-section">
            <label>Date & Time</label>
            <span>Sun 8 Sept - 10:00PM</span>
          </div>
          <div className="info-section">
            <label>Screen</label>
            <span>03</span>
          </div>
          <div className="info-section">
            <label>Row</label>
            <span>F</span>
          </div>
          <div className="info-section">
            <label>Rate</label>
            <span>{props.value.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quote;
