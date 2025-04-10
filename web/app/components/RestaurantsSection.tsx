"use client";
import React, { useCallback, useState } from "react";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  InfoWindow,
} from "@vis.gl/react-google-maps";

// Make sure these env variables are typed in `next.config.js` or `env.d.ts` if needed
const API = process.env.NEXT_PUBLIC_API_KEY as string;
const MapID = process.env.NEXT_PUBLIC_MAP_ID as string;

type RestaurantLocation = {
  lat: number;
  lng: number;
  name: string;
  description: string;
  email: string;
};

const center = {
  lat: 59.3293,
  lng: 18.0686,
};

const restaurantLocations: RestaurantLocation[] = [
  {
    lat: 59.88537,
    lng: 17.66851,
    name: "McDonald's Gränby",
    description: "Takpannegatan 33, 754 60 Uppsala.",
    email: "018322457",
  },
  {
    lat: 59.86914,
    lng: 17.66195,
    name: "McDonald's Uppsala Vaksalagatan",
    description:
      "Fyra Mackarnas Korsning, Årstagatan 1-3, 754 34 Uppsala.",
    email: "018251687",
  },
  {
    lat: 59.85878,
    lng: 17.68266,
    name: "McDonald's Uppsala Fyrislund",
    description: "Fålhagsleden 73, 754 48 Uppsala",
    email: "018100380",
  },
];

const RestaurantsMap: React.FC = () => {
  const [selectedMarker, setSelectedMarker] = useState<RestaurantLocation | null>(null);

  const handleMarkerClick = useCallback((location: RestaurantLocation) => {
    setSelectedMarker(location);
  }, []);

  const handleClose = useCallback(() => setSelectedMarker(null), []);

  return (
    <section className="py-12 px-4 mt-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          Våra Restauranger i <span className="text-[#F9D00F]">Sverige</span>
        </h2>
        <p className="text-gray-700 text-base sm:text-lg mt-2">
          Se var våra restauranger finns på kartan och besök oss nära dig!
        </p>
      </div>
      <div className="max-w-7xl mx-auto mt-8 h-[500px]">
        <APIProvider apiKey={API}>
          <Map
            mapId={MapID}
            defaultCenter={center}
            defaultZoom={5}
            className="w-full h-full rounded-lg shadow-md"
          >
            {restaurantLocations.map((location, index) => (
              <AdvancedMarker
                key={index}
                position={{ lat: location.lat, lng: location.lng }}
                title={location.name}
                onClick={() => handleMarkerClick(location)}
              >
                <img
                  src="/logo.svg"
                  alt={location.name}
                  style={{ width: "50px", height: "30px" }}
                />
              </AdvancedMarker>
            ))}
            {selectedMarker && (
              <InfoWindow
                position={{
                  lat: selectedMarker.lat,
                  lng: selectedMarker.lng,
                }}
                onClose={handleClose}
              >
               <div>
                  <h3 className="font-bold text-lg mb-1">
                    {selectedMarker.name}
                  </h3>
                  <p className="text-sm text-gray-700">
                    {selectedMarker.description}
                  </p>
                  <p className="text-sm text-gray-700 mt-1">
                    Telefon: {selectedMarker.email}
                  </p>
                </div>
              </InfoWindow>
            )}
          </Map>
        </APIProvider>
      </div>
    </section>
  );
};

export default RestaurantsMap;