import * as React from 'react';
import ReactMapboxGl, { Popup } from 'react-mapbox-gl';
import { connect } from 'react-redux';
import { getLocations } from '../actions/index';
import { StateRoot } from '../reducers/index';
import { Stations } from './stations';
import styled from 'styled-components';
import { getDeepLink } from '../link';

const NavBar = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 60px;
  background-color: white;
`;

const Map = ReactMapboxGl({
  accessToken: 'pk.eyJ1IjoiYWxleDMxNjUiLCJhIjoiY2o0MHp2cGtiMGFrajMycG5nbzBuY2pjaiJ9.QDApU0XH2v35viSwQuln5w',
  attributionControl: false
});

const containerStyle = {
  height: '100vh',
  width: '100vw'
};

export interface Props {
  getLocations: any;
  locations: any;
}

export interface State {
  origin?: string;
  destination?: string;
  hover?: string;
}

class Main extends React.Component<Props> {

  public state: State = {};

  public componentWillMount() {
    this.props.getLocations();
  }

  private onSelect = (id: string) => {
    console.log(`selecting station with id ${id}`);
    this.setState({
      [this.state.origin ? 'destination' : 'origin']: id
    });
  }

  private onGetToResults = () => {
    if (!this.state.origin || !this.state.destination) {
      return;
    }

    window.open(getDeepLink(this.state.origin, this.state.destination), '_blank');
  }

  private onMouseEnterFeature = (map: any, id: string) => {
    map.getCanvas().style.cursor = 'pointer';
    this.setState({
      hover: id
    });
  }

  private onMouseLeaveFeature = (map: any, id: string) => {
    map.getCanvas().style.cursor = '';
    this.setState({
      hover: undefined
    });
  }

  private onDeleteStation = (direction: string) => {
    this.setState({
      [direction]: undefined
    });
  }

  public render() {
    const { locations } = this.props;
    const hoverLocation = this.state.hover ? locations[this.state.hover] : undefined;
    const originLocation = this.state.origin ? locations[this.state.origin] : undefined;
    const destinationLocation = this.state.destination ? locations[this.state.destination] : undefined;

    return (
      <div>
        <Map
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={containerStyle}
        >
          <Stations
            onMouseEnter={this.onMouseEnterFeature}
            onMouseLeave={this.onMouseLeaveFeature}
            locations={locations}
            onSelect={this.onSelect}
          />
          {
            !!this.state.hover ? (
              <Popup
                coordinates={[hoverLocation.longitude, hoverLocation.latitude]}
              >
                {hoverLocation.name}
              </Popup>
            ) : undefined
          }

        </Map>
        <NavBar>
          <div>
            <div>
              Origin:
              <span onClick={() => this.onDeleteStation('origin')}>
                {originLocation && originLocation.name}
              </span>
            </div>
            <div>
              Destination:
              <span onClick={() => this.onDeleteStation('destination')}>
                {destinationLocation && destinationLocation.name}
              </span>
            </div>
          </div>
          <button onClick={this.onGetToResults}>Results</button>
        </NavBar>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getLocations: () => dispatch(getLocations())
  };
};

const mapStateToProps = (state: StateRoot, props: any) => ({
  locations: state.locations
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
