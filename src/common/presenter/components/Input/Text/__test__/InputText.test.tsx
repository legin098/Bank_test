import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import InputText from '../InputText';
import {styles} from '../styles';

describe('test_input_text', () => {
  describe('render', () => {
    test('renders_without_label_and_placeholder', () => {
      render(<InputText />);

      expect(screen.getByTestId('container')).toBeTruthy();
      expect(screen.queryByTestId('labelInput')).toBeNull();
      expect(screen.getByTestId('input')).toBeTruthy();
      expect(screen.queryByTestId('errorMessage')).toBeNull();
    });

    test('renders_with_label', () => {
      const label = 'Username';

      render(<InputText label={label} />);

      expect(screen.getByTestId('container')).toBeTruthy();
      expect(screen.getByTestId('labelInput')).toBeTruthy();
      expect(screen.getByText(label)).toBeTruthy();
      expect(screen.getByTestId('input')).toBeTruthy();
      expect(screen.queryByTestId('errorMessage')).toBeNull();
    });

    test('renders_with_placeholder', () => {
      const placeholder = 'Enter your text';

      render(<InputText placeholder={placeholder} />);

      expect(screen.getByTestId('container')).toBeTruthy();
      expect(screen.queryByTestId('labelInput')).toBeNull();
      expect(screen.getByTestId('input')).toBeTruthy();
      expect(screen.getByPlaceholderText(placeholder)).toBeTruthy();
      expect(screen.queryByTestId('errorMessage')).toBeNull();
    });

    test('input_error_styles', () => {
      const error = {isVisible: true, label: 'Error message'};

      render(<InputText error={error} />);

      const inputComponent = screen.getByTestId('input');
      const inputStyle = inputComponent.props.style;

      expect(inputStyle).toContain(styles.inputError);
    });
  });

  describe('actions', () => {
    test('call_onChangeText_event', () => {
      const onChangeText = jest.fn();

      render(<InputText onChangeText={onChangeText} />);

      const inputComponent = screen.getByTestId('input');

      fireEvent.changeText(inputComponent, 'test input');
      expect(onChangeText).toHaveBeenCalledWith('test input');
    });

    test('call_onBlur_event', () => {
      const onBlur = jest.fn();

      render(<InputText onBlur={onBlur} />);

      const inputComponent = screen.getByTestId('input');

      fireEvent(inputComponent, 'blur');
      expect(onBlur).toHaveBeenCalledTimes(1);
    });
  });
});
