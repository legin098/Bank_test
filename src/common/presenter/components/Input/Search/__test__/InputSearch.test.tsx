import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import InputSearch from '../InputSearch';

describe('test_input_search', () => {
  describe('render', () => {
    test('renders_without_placeholder', () => {
      render(<InputSearch />);

      expect(screen.getByTestId('container')).toBeTruthy();
      expect(screen.getByTestId('input')).toBeTruthy();
    });

    test('renders_with_placeholder', () => {
      const placeholder = 'Search here';

      render(<InputSearch placeholder={placeholder} />);

      expect(screen.getByTestId('container')).toBeTruthy();
      expect(screen.getByTestId('input')).toBeTruthy();
      expect(screen.getByPlaceholderText(placeholder)).toBeTruthy();
    });
  });

  describe('actions', () => {
    test('call_onChangeText_event', () => {
      const onChangeText = jest.fn();

      render(<InputSearch onChangeText={onChangeText} />);

      const inputComponent = screen.getByTestId('input');

      fireEvent.changeText(inputComponent, 'test input');
      expect(onChangeText).toHaveBeenCalledWith('test input');
    });

    test('call_onBlur_event', () => {
      const onBlur = jest.fn();

      render(<InputSearch onBlur={onBlur} />);

      const inputComponent = screen.getByTestId('input');

      fireEvent(inputComponent, 'blur');
      expect(onBlur).toHaveBeenCalledTimes(1);
    });
  });
});
