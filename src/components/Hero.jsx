import React from 'react'
import {
  UilSchedule,
  UilUniversity,
  UilMapMarker,
} from "@iconscout/react-unicons";

function Hero(props) {

  const formatDateTime = (isoDateTime) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      timeZoneName: "short",
    };
    return new Date(isoDateTime).toLocaleString("en-US", options);
  };

const generateGoogleCalendarURL = (eventDetails) => {
  const eventDate = new Date(eventDetails.date_time);

  const startTime = eventDate.toISOString().replace(/[-:.]/g, "");
  const endTime = new Date(eventDate.getTime() + 2 * 60 * 60 * 1000)
    .toISOString()
    .replace(/[-:.]/g, "");

  const details = encodeURIComponent(eventDetails.title);
  const location = encodeURIComponent(
    `${eventDetails.venue_name}, ${eventDetails.venue_city}, ${eventDetails.venue_country}`
  );
  const dates = encodeURIComponent(`${startTime}/${endTime}`);

  return `https://www.google.com/calendar/render?action=TEMPLATE&text=${details}&location=${location}&dates=${dates}`;
};

  return (
    <section className="hero">
      <div className="hero--text">
        {props.card ? (
          <div>
            <p>{props.card.description}</p>

            <div className="hero--flexbox">
              <UilSchedule />
              <p>:</p>
              <p className="hero--text1">
                {formatDateTime(props.card.date_time)}
              </p>
              <a
                href={generateGoogleCalendarURL(props.card)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="hero--button">Add to Google Calendar</button>
              </a>
            </div>

            <div className="hero--flexbox">
              <UilUniversity />
              <p>:</p>
              <p className="hero--text1">{props.card.venue_name}</p>
            </div>

            <div className="hero--flexbox">
              <UilMapMarker />
              <p>:</p>
              <p className="hero--text1">
                {props.card.venue_city}, {props.card.venue_country}
              </p>
            </div>

            <div className="hero--flexbox">
              <p className="hero--text2">Organiser:</p>
              <img src={props.card.organiser_icon} className="hero--image" />
              <p>{props.card.organiser_name}</p>
            </div>
          </div>
        ) : (
          <p>Click on the Conference cards to know more about them</p>
        )}
      </div>
    </section>
  );
}

export default Hero
