import React from "react";
import GoogleMapReact from "google-map-react";
/*-------Styling-------*/
import { HeatMapWrapper } from "../styles";

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

const HeatMap = () => {
  const defaultProps = {
    center: {
      lat: 26.228516,
      lng: 50.586048,
    },
    zoom: 11,
  };

  return (
    // Important! Always set the container height explicitly
    <HeatMapWrapper>
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
    </HeatMapWrapper>
  );
};

export default HeatMap;
