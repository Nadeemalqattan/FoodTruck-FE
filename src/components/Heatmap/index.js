/*-------React Imports-------*/
import React from "react";
import GoogleMapReact from "google-map-react";
import { useSelector } from "react-redux";

/*-------Styling-------*/
import { HeatMapWrapper } from "../styles";

import LocalShippingIcon from "@material-ui/icons/LocalShipping";
const HeatMap = ({ heatmap }) => {
  const location = useSelector((state) => state.authReducer.location);
  const data = {
    positions: heatmap,
    options: {
      radius: 70,
      opacity: 0.5,
    },
  };
  if (location === null) {
    return <div className="mt-4">Please Update location</div>;
  } else {
    const defaultProps = {
      center: {
        lat: location.latitude,
        lng: location.longitude,
      },
      zoom: 15,
    };

    return (
      <div className="mt-4">
        <HeatMapWrapper>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: ["AIzaSyDGEXF_vPRNiDEsTwSPA3lkJ9gKDc-n44w"],
              libraries: ["visualization"],
            }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            heatmapLibrary={true}
            heatmap={data}
          >
            <LocalShippingIcon
              lat={location.latitude}
              lng={location.longitude}
            />
          </GoogleMapReact>
        </HeatMapWrapper>
      </div>
    );
  }
};

export default HeatMap;
