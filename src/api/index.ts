export type RequestApi<P, R> = (
  payload: P,
  signal?: AbortSignal | null,
) => Promise<R>;

export type IconType = 'car' | 'home' | 'plane' | 'person';

export type Marker = {
  id: string;
  title: string;
  lat: number;
  lng: number;
  icon: IconType;
};

export type GetMarkersApiParams = {
  query?: string;
};

export type GetMarkersApiResponse = {
  markers: Marker[];
};

export type GetMarkersApi = RequestApi<
  GetMarkersApiParams,
  GetMarkersApiResponse
>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getMarkersApi: GetMarkersApi = props => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        markers: [
          {
            id: '1',
            lat: 31.960657,
            lng: 51.4106027,
            title: 'Marker1',
            icon: 'car',
          },
          {
            id: '2',
            lat: 31.960757,
            lng: 51.42,
            title: 'Marker2',
            icon: 'home',
          },
          {
            id: '3',
            lat: 31.97,
            lng: 51.4108027,
            title: 'Marker3',
            icon: 'person',
          },
          { id: '4', lat: 31.97, lng: 51.42, title: 'Marker4', icon: 'plane' },
        ],
      });
    }, 300);
  });
};
