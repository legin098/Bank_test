import React from 'react';
import {render, screen} from '@testing-library/react-native';
import ModalLoading from '../ModalLoading';

describe('test_modal_loading', () => {
  describe('render', () => {
    test('renders_with_default_props', () => {
      render(<ModalLoading isVisible />);

      expect(screen.getByTestId('modal')).toBeTruthy();
      expect(screen.getByTestId('container_loading')).toBeTruthy();
      expect(screen.getByTestId('activity_indicator')).toBeTruthy();
      expect(screen.getByText('Loading...')).toBeTruthy();
    });
  });
});
