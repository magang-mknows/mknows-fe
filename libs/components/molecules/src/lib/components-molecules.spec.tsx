import { render } from '@testing-library/react';

import ComponentsMolecules from './components-molecules';

describe('ComponentsMolecules', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentsMolecules />);
    expect(baseElement).toBeTruthy();
  });
});
