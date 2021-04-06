/*-------React Imports-------*/
import React from "react";
import GoogleMapReact from "google-map-react";
import { useSelector } from "react-redux";

/*-------Styling-------*/
import { HeatMapWrapper } from "../styles";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const HeatMap = () => {
  const heatmap = useSelector((state) => state.authReducer.heatmap);

  const data = {
    positions: [
      {
        lat: 0,
        lng: 0,
      },
    ],
    options: {
      radius: 10,
      opacity: 0.6,
    },
  };

  for (var i = 0; i < Object.keys(data).length; i++) {
    data.positions.push({
      lat: heatmap && heatmap[i].location.coordinates[1],
      lng: heatmap && heatmap[i].location.coordinates[0],
    });
  }

  const defaultProps = {
    center: {
      lat: 26.228516,
      lng: 50.586048,
    },
    zoom: 11,
  };

  return (
    <HeatMapWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyCZCYlKQyNqmTRFjrQSyRVxGd53_7j7DlQ" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        heatmapLibrary={true}
        heatmap={data}
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
