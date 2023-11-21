import React from 'react';
import {render, screen} from '@testing-library/react-native';
import PageLoading from '../PageLoading';

describe('test_page_loading', () => {
  describe('render', () => {
    test('renders_correctly', () => {
      render(<PageLoading />);

      expect(screen.getByTestId('activity_indicator')).toBeTruthy();
      expect(screen.getByText('The view is charging...')).toBeTruthy();
    });
  });
});
