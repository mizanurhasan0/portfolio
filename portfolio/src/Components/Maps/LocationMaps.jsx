import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

export default function LocationMaps() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.GOOLGE_MAP_API_KEY,
  });

  if (!isLoaded)
    return <div className="flex items-center justify-center">Loading....</div>;
  return (
    <div className="py-10 w-full ">
      <div className="w-full md:flex  md:container text-white ">
        <div className="basis-3/4 rounded-xl overflow-hidden">
          <Map />
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="basis-1/4  py-10 font-Audiowide pl-5  flex flex-col justify-center items-center"
        >
          <h1 className="text-2xl">Personal Portfolio</h1>
          <p>DOSH, Avenue 09,Mirpur- Dhaka</p>
        </div>
      </div>
    </div>
  );
}
function Map() {
  const center = {
    lat: 23.837708,
    lng: 90.373787,
  };
  return (
    <GoogleMap
      mapContainerClassName="w-full h-[50vh] "
      zoom={15}
      center={center}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
