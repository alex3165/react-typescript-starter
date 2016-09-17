import * as React from 'react';
import { connect } from 'react-redux';
import * as Radium from 'radium';

const style = {
  title: {
    ':hover': {
      color: 'blue'
    }
  }
};

export class Main extends React.Component<any, any> {

  public render() {

    return (
      <div>
        <h1 style={style.title}>Yeah it works</h1>
      </div>
    );
  }
}

export default
connect(null, null)(Radium(Main));
