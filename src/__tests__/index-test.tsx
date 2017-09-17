import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as TestUtils from 'react-dom/test-utils';
import Main from '../containers/main';

it('Should check if the index page render correctly', () => {
  const wrapper = TestUtils.renderIntoDocument(
    <Main/>
  );
  const main = ReactDOM.findDOMNode(wrapper);
  expect(main.textContent).toEqual('Yeah it works');
});
