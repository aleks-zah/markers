import * as L from 'leaflet';
import 'leaflet-measure';
import 'leaflet-measure/dist/leaflet-measure.css';
import { useEffect, useState } from 'react';
import { useMap } from 'react-leaflet';

// @ts-expect-error extending untyped leaflet library
L.Control.Measure.include({
  // set icon on the capture marker
  _setCaptureMarkerIcon: function () {
    // disable autopan
    this._captureMarker.options.autoPanOnFocus = false;

    // default function
    this._captureMarker.setIcon(
      L.divIcon({
        iconSize: this._map.getSize().multiplyBy(2),
      }),
    );
  },
});

// @ts-expect-error extending untyped leaflet library
const measureControl = new L.Control.Measure({
  position: 'topright',
  lineColor: 'blue',
});

export const Ruler = () => {
  const map = useMap();
  const [isInitilized, toggleInitilized] = useState(false);
  useEffect(() => {
    if (isInitilized) return;

    measureControl.addTo(map);
    toggleInitilized(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);

  return null;
};
