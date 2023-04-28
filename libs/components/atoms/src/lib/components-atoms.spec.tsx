import { render } from '@testing-library/react';

import ComponentsAtoms from './components-atoms';

describe('ComponentsAtoms', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentsAtoms />);
    expect(baseElement).toBeTruthy();
  });
});
