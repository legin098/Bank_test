import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import Header from '../Header';

describe('test_header', () => {
  describe('render', () => {
    test('renders_without_onPress_prop', () => {
      render(<Header />);

      expect(screen.getByTestId('container')).toBeTruthy();
    });

    test('header_with_on_press_prop', () => {
      const onPress = jest.fn();

      render(<Header onPress={onPress} />);

      expect(screen.getByTestId('container')).toBeTruthy();
      expect(screen.getByTestId('goBack')).toBeTruthy();
      expect(screen.getByTestId('logoImg')).toBeTruthy();
    });
  });
  describe('actions', () => {
    test('call_onPress_event', () => {
      const onPress = jest.fn();

      render(<Header onPress={onPress} />);

      const component = screen.getByTestId('goBack');

      fireEvent.press(component);
      expect(onPress).toBeCalledTimes(1);
    });
  });
});
