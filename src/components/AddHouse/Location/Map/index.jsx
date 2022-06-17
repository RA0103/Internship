import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
export default function Map({ house }) {
  const containerStyle = {
    width: "100%",
    height: "450px",
  };

  const center = {
    lat: house?.location?.latitude,
    lng: house?.location?.longitude,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAkkKvMyf8Tk3Q8s7MWXin6njbtjIjq2S4",
  });
  return (
    <>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={13}
          //   onLoad={onLoad}
          //   onUnmount={onUnmount}
        >
          {house?.location?.latitude &&
          house?.location?.longitude &&
          house?.location?.latitude.toString()[2] === "." ? (
            <>
              <Marker position={center} />
              <Marker
                position={{
                  lat: house?.location?.latitude,
                  lng: house?.location?.longitude,
                }}
              />
            </>
          ) : (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={{
                lat: 41.311081,
                lng: 69.240562,
              }}
              zoom={13}
            />
          )}
          <></>
        </GoogleMap>
      ) : (
        <></>
      )}
    </>
  );
}
