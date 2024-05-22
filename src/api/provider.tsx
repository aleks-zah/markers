import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Marker, getMarkersApi } from '../api';

const MarkersContext = createContext<{ markers: Marker[] }>({ markers: [] });

export const MarkersProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [markers, setMarkers] = useState<Marker[]>([]);

  useEffect(() => {
    getMarkersApi({
      query: encodeURIComponent(window.location.search.slice(1)),
    }).then(response => {
      setMarkers(response.markers);
    });
  }, []);

  return (
    <MarkersContext.Provider value={{ markers }}>
      {children}
    </MarkersContext.Provider>
  );
};

export const useMarkers = () => {
  const context = useContext(MarkersContext);
  if (!context) {
    throw new Error('useMarkers() must be used within MarkersProvider context');
  }

  return context;
};
