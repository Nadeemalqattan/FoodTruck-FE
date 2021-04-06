import React from "react";
import GoogleMapReact from "google-map-react";
/*-------Styling-------*/
import { HeatMapWrapper } from "../styles";
import { useSelector } from "react-redux";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const HeatMap = () => {
  const heatmap = useSelector((state) => state.authReducer.heatmap);

  console.log("HEATMAP", heatmap);
  const heatMapData = {
    positions: [
      {
        lat: heatmap && heatmap[0].location.coordinates[1],
        lng: heatmap && heatmap[0].location.coordinates[0],
      },
    ],
    options: {
      radius: 10,
      opacity: 0.6,
    },
  };

  console.log("Heatmap data", typeof heatMapData);
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
