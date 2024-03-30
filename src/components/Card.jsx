import React from 'react'
import { UilMapMarker } from "@iconscout/react-unicons";

function Card(props) {
  return (
    <div className="card" onClick={props.isClicked}>
      <img src={props.banner_image} className="card--image" />
      <p className="card--title">{props.title}</p>
      <p className="card--organizer">{props.organiser_name}</p>
      <div className="card--flexbox">
        <UilMapMarker className="card--pointer" />
        <p className="card--location">{props.venue_country}</p>
      </div>
    </div>
  );
}

export default Card
