"use client"

import { useEffect, useState } from 'react'
import Map, { Marker } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { MapPin } from 'lucide-react'

export function DeliveryMap() {
  const [viewState, setViewState] = useState({
    longitude: -74.006,
    latitude: 40.7128,
    zoom: 11
  })

  return (
    <Map
      {...viewState}
      onMove={evt => setViewState(evt.viewState)}
      style={{ width: '100%', height: '100%' }}
      mapStyle="mapbox://styles/mapbox/light-v11"
      mapboxAccessToken="pk.eyJ1Ijoic3RhY2tibGl0eiIsImEiOiJjbHRiMHBtYXQwMXZqMmlvNGJ2NG9jNW5wIn0.2fAdHfJiRwYZM5qeXVfRjw"
    >
      <Marker longitude={-74.006} latitude={40.7128} anchor="bottom">
        <MapPin className="h-6 w-6 text-primary animate-bounce" />
      </Marker>
    </Map>
  )
}