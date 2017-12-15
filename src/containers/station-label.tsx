import * as React from 'react';
import styled from 'styled-components';

interface ContainerProps {
  selected: boolean;
}

const Container = styled.div`
  height: 30px;
  border: 1px
    ${(props: ContainerProps) => (props.selected ? 'solid' : 'dashed')} grey;
  width: 200px;
  min-height: 70px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
`;

const Placeholder = styled.div`
  color: grey;
`;

const Close = styled.div`
  position: absolute;
  top: 4px;
  right: 6px;
  cursor: pointer;
`;

const Input = styled.input``;

export interface Props {
  onUnselect: () => void;
  placeholder: string;
  stations: any;
  onSelect: (id: string, direction?: string) => void;
  direction: 'origin' | 'destination';
}

export default class StationLabel extends React.Component<Props> {
  public state = {
    shouldDisplayPlaceholder: true,
    query: ''
  };

  public onToggleControl = () => {
    this.setState({
      shouldDisplayPlaceholder: !this.state.shouldDisplayPlaceholder
    });
  };

  public onClickInput = (evt: any) => {
    evt.stopPropagation();
  };

  public onChange = (evt: any) => {
    this.setState({
      query: evt.target.value
    });
  };

  public render() {
    const {
      children,
      onUnselect,
      placeholder,
      stations,
      onSelect,
      direction
    } = this.props;
    const { shouldDisplayPlaceholder, query } = this.state;

    const filteredStations = Object.keys(stations)
      .filter(id => stations[id].name.toLowerCase().includes(query))
      .map(id => stations[id]);

    return (
      <div>
        <Container selected={!!children} onClick={this.onToggleControl}>
          {!!children && <Close onClick={onUnselect}>x</Close>}
          {children}
          {!children &&
            shouldDisplayPlaceholder && (
              <Placeholder>{placeholder}</Placeholder>
            )}
          {!children &&
            !shouldDisplayPlaceholder && (
              <Input onClick={this.onClickInput} onChange={this.onChange} />
            )}
        </Container>
        {!children &&
          !shouldDisplayPlaceholder &&
          filteredStations.length !== Object.keys(stations).length && (
            <ul>
              {filteredStations
                .filter((_, index) => index < 20)
                .map((station, index) => (
                  <li
                    key={index}
                    onClick={() => onSelect(station.id, direction)}
                  >
                    {station.name}
                  </li>
                ))}
            </ul>
          )}
      </div>
    );
  }
}
