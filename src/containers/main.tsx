import * as React from 'react';
import ReactMapboxGl, { Popup } from 'react-mapbox-gl';
import { connect } from 'react-redux';
import { getLocations } from '../actions/index';
import { StateRoot } from '../reducers/index';
import { Stations } from './stations';
import styled from 'styled-components';
import { getDeepLink } from '../link';
import StationLabel from './station-label';
import Button from './button';
import * as moment from 'moment';
// tslint:disable-next-line:no-var-requires
import './style.css';
// tslint:disable-next-line:no-var-requires
// const data = require('../data/style.json');
// tslint:disable-next-line:no-var-requires
const DatePicker = require('react-datepicker').default;
// tslint:disable-next-line:no-submodule-imports
import 'react-datepicker/dist/react-datepicker.css';

const NavBar = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  min-height: 120px;
  justify-content: center;
`;

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiYWxleDMxNjUiLCJhIjoiY2o0MHp2cGtiMGFrajMycG5nbzBuY2pjaiJ9.QDApU0XH2v35viSwQuln5w',
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
  date: string;
}

class Main extends React.Component<Props> {
  public state: State = {
    date: moment().format()
  };

  public componentWillMount() {
    this.props.getLocations();
  }

  private onSelect = (id: string, direction?: string) => {
    console.log(`selecting station with id ${id}`);
    const finalDirection =
      direction || (this.state.origin ? 'destination' : 'origin');
    this.setState({
      [finalDirection]: id
    });
  };

  private onGetToResults = () => {
    if (!this.state.origin || !this.state.destination) {
      return;
    }

    window.open(
      getDeepLink(this.state.origin, this.state.destination, this.state.date),
      '_blank'
    );
  };

  private onMouseEnterFeature = (map: any, id: string) => {
    map.getCanvas().style.cursor = 'pointer';
    this.setState({
      hover: id
    });
  };

  private onMouseLeaveFeature = (map: any, id: string) => {
    map.getCanvas().style.cursor = '';
    this.setState({
      hover: undefined
    });
  };

  private onDeleteStation = (direction: string) => {
    this.setState({
      [direction]: undefined
    });
  };

  private onChangeDate = (date: any) => {
    this.setState({
      date: date.format()
    });
  };

  public render() {
    const { locations } = this.props;
    const hoverLocation = this.state.hover
      ? locations[this.state.hover]
      : undefined;
    const originLocation = this.state.origin
      ? locations[this.state.origin]
      : undefined;
    const destinationLocation = this.state.destination
      ? locations[this.state.destination]
      : undefined;

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
          {!!this.state.hover ? (
            <Popup
              coordinates={[hoverLocation.longitude, hoverLocation.latitude]}
            >
              {hoverLocation.name}
            </Popup>
          ) : (
            undefined
          )}
        </Map>
        <NavBar>
          <StationLabel
            onUnselect={() => this.onDeleteStation('origin')}
            placeholder="Select an origin"
            stations={locations}
            onSelect={this.onSelect}
            direction="origin"
          >
            {originLocation && originLocation.name}
          </StationLabel>
          <StationLabel
            onUnselect={() => this.onDeleteStation('destination')}
            placeholder="Select a destination"
            stations={locations}
            onSelect={this.onSelect}
            direction="destination"
          >
            {destinationLocation && destinationLocation.name}
          </StationLabel>
          <DatePicker
            selected={moment(this.state.date)}
            onChange={this.onChangeDate}
            showTimeSelect={true}
            className="datepicker"
          />
          <Button onClick={this.onGetToResults}>Let's go</Button>
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
