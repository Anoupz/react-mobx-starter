import * as React from "react";
import { customRender } from '../../../tests/test-utils';
import App from '../App';

describe('App Component Testing', () => {
  const mainStore = {
    name: 'Test'
  };

  it('renders without crashing', () => {
    customRender(<App />, { mainStore });
  });
});
