import * as React from 'react';
import { Layer, Feature } from 'react-mapbox-gl';

export interface Props {
  locations: any;
  onSelect: (id: string) => any;
  onMouseEnter: any;
  onMouseLeave: any;
}

const layout = { 'icon-image': 'marker-15' };

export const Stations: React.StatelessComponent<Props> = ({
  locations,
  onSelect,
  onMouseEnter,
  onMouseLeave
}) => (
  <Layer
    type="symbol"
    id="marker"
    layout={layout}
  >
  {
    Object.keys(locations).map((id: string) => (
      <Feature
        key={id}
        onClick={() => onSelect(id)}
        onMouseEnter={({ map }: any) => onMouseEnter(map, id)}
        onMouseLeave={({ map }: any) => onMouseLeave(map, id)}
        coordinates={[locations[id].longitude, locations[id].latitude]}
      />
    ))
  }
  </Layer>
);
