import * as React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  :hover {
    color: blue;
  }
`;

class Main extends React.Component<any, {}> {
  public render() {
    return (
      <div>
        <Title>Yeah it works</Title>
      </div>
    );
  }
}

export default Main;
