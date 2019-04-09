// Add some helpful assertions from jest-dom.
// See: https://github.com/gnapse/jest-dom
import 'jest-dom/extend-expect';

import * as React from 'react';
import { render } from 'react-testing-library';

import { Provider } from 'mobx-react';

const customRender = (node, stores, options) => {
  return render(<Provider {...stores}>{node}</Provider>, options);
};

// re-export everything
export * from 'react-testing-library';

// override render method
export { customRender };
