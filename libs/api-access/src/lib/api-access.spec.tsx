import { render } from '@testing-library/react';

import ApiAccess from './api-access';

describe('ApiAccess', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ApiAccess />);
    expect(baseElement).toBeTruthy();
  });
});
