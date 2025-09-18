"use client";

import { useEffect, useState } from "react";

interface position{
    latitude?: number;
    longtitude?: number;
    accuracy?: number;
    elevation?: number;
}

export default function LocalNavigation() {
  const [position, setPosition] = useState<position | null>(null);
  const [accuracy, setAccuracy] = useState(null);
  const [map, setMap] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let watchId = null
    if (navigator.geolocation) {
    watchId =navigator.geolocation.watchPosition((position) => {
        setPosition({
          latitude: position.coords.latitude,
          longtitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
        });
      },(err)=> {
        setError(`Error retriving location: ${err.message}`)
      },{enableHighAccuracy:true,
        timeout:5000,
        maximumAge:0
      });
    }
    else{
        setError('Geolocation is not supported in this browser.');
    }
          return () => {
          if (watchId) {
            navigator.geolocation.clearWatch(watchId);
          }
        };
      }, []);

  return(
    <div className="flex flex-col">
        <span>Latitude : {position?.latitude}</span>
        <span>Longtitude : {position?.longtitude}</span>
        <span>Accuracy : {position?.accuracy} meters</span>
        <div>Error : {error}</div>
    </div>
  )
}
