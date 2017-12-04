import * as React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import { connect } from 'react-redux';
import { getScopes } from '../actions/index';

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoiYWxleDMxNjUiLCJhIjoiY2o0MHp2cGtiMGFrajMycG5nbzBuY2pjaiJ9.QDApU0XH2v35viSwQuln5w'
});

const layout = { 'icon-image': 'marker-15' };
const containerStyle = {
  height: '100vh',
  width: '100vw'
};

export interface Props {
  getScopes: any;
}

class Main extends React.Component<Props> {
  public componentWillMount() {
    this.props.getScopes();
  }

  public render() {
    return (
      <Map
        style="mapbox://styles/mapbox/streets-v9"
        containerStyle={containerStyle}
      >
        <Layer
          type="symbol"
          id="marker"
          layout={layout}
        >
          <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
        </Layer>
      </Map>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getScopes: () => dispatch(getScopes())
  };
};

export default connect(null, mapDispatchToProps)(Main);
