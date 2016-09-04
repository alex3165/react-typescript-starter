import * as React from 'react';
import { connect } from 'react-redux';

class Main extends React.Component<any, any> {

  public render() {

    return (
      <div>
        <h1>Yeah it works</h1>
      </div>
    );
  }
}

export default
connect(null, null)(Main);
