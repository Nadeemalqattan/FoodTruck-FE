/*-------React Imports-------*/
import React from "react";
import GoogleMapReact from "google-map-react";
import { useSelector } from "react-redux";

/*-------Styling-------*/
import { HeatMapWrapper } from "../styles";

import MyLocationIcon from '@material-ui/icons/MyLocation';
const HeatMap = ({heatmap}) => {

  const data = {
    positions:heatmap,
    options: {
      radius: 10,
      opacity: 0.6,
    },
  };

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
        bootstrapURLKeys={{ key: "123456789" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        heatmapLibrary={true}
        heatmap={data}
      >
        <MyLocationIcon
          lat={26.228516}
          lng={50.586048}
        />
      </GoogleMapReact>
    </HeatMapWrapper>
  );
};

export default HeatMap;
