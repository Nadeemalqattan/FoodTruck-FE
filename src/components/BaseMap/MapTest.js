import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const heatMapData = {
  positions: [
    { lat: 55.5, lng: 34.56 },
    { lat: 26.228516, lng: 50.586048 },
  ],
  options: {
    radius: 20,
    opacity: 0.6,
  },
};

const SimpleMap = () => {
  const defaultProps = {
    center: {
      lat: 26.228516,
      lng: 50.586048,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "60vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCZCYlKQyNqmTRFjrQSyRVxGd53_7j7DlQ" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        heatmapLibrary={true}
        heatmap={heatMapData}
      >
        <AnyReactComponent
          lat={26.228516}
          lng={50.586048}
          text="YOUR LOCATION"
        />
      </GoogleMapReact>
    </div>
  );
};

export default SimpleMap;
