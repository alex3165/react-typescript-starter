import * as React from 'react';
import { StyleSheet, css } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  title: {
    ':hover': {
      color: 'blue'
    }
  }
});

export class Main extends React.Component<void, void> {

  public render() {
    return (
      <div>
        <h1 className={css(styles.title)}>Yeah it works</h1>
      </div>
    );
  }
}

export default Main;
