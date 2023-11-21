import React from 'react';
import {render, screen} from '@testing-library/react-native';
import ErrorMessage from '../ErrorMessage';

describe('test_error_message', () => {
  describe('render', () => {
    test('renders_with_is_visible_false', () => {
      render(<ErrorMessage isVisible={false} />);

      expect(screen.queryByTestId('labelError')).toBeNull();
    });

    test('renders_with_is_visible_true', () => {
      const label = 'This is an error message';

      render(<ErrorMessage isVisible label={label} />);

      expect(screen.getByTestId('labelError')).toBeTruthy();
      expect(screen.getByText(label)).toBeTruthy();
    });
  });
});
