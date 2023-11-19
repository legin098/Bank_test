import React from 'react';
import {StyleProp, ViewStyle, TextInputProps} from 'react-native';
import {render, screen, fireEvent} from '@testing-library/react-native';
import '@testing-library/jest-native';
import InputFullName from '../InputText';
import {styles} from '../styles';

jest.mock('@common/presenter/components/Label', () => (props: any) => (
  //@ts-ignore
  <mock-label {...props} />
));
jest.mock(
  '@common/presenter/components/View/ErrorMessage',
  () => (props: any) =>
    (
      //@ts-ignore
      <mock-viewErrorMessage {...props} />
    ),
);

describe('test_InputFullName', () => {
  describe('render', () => {
    test('parent_container_styles', () => {
      const styles: StyleProp<ViewStyle> = {marginVertical: 10},
        onChangeText = jest.fn();
      render(
        <InputFullName containerStyles={styles} onChangeText={onChangeText} />,
      );
      const ctnInput = screen.getByTestId('container');
      expect(ctnInput).toHaveStyle(styles);
    });
    test('additional_input_styles', () => {
      const styles: StyleProp<ViewStyle> = {borderColor: 'red'},
        onChangeText = jest.fn();
      render(
        <InputFullName inputStyles={styles} onChangeText={onChangeText} />,
      );
      const input = screen.getByTestId('input');
      expect(input).toHaveStyle(styles);
    });
    test('input_placeholder_when_passing_a_value_other_than_empty', () => {
      const placeholder = 'example',
        onChangeText = jest.fn();
      render(
        <InputFullName placeholder={placeholder} onChangeText={onChangeText} />,
      );
      const input = screen.getByTestId('input');
      expect(input).toHaveProp('placeholder', placeholder);
    });
    test('input_label_when_passing_a_value_other_than_empty', () => {
      const label = 'example',
        onChangeText = jest.fn();
      render(<InputFullName label={label} onChangeText={onChangeText} />);
      const labelInput = screen.getByTestId('labelInput');
      expect(labelInput.children[0]).toEqual(label);
    });
    test('textInput_value', () => {
      const value = 'example',
        onChangeText = jest.fn();
      render(<InputFullName value={value} onChangeText={onChangeText} />);
      const input = screen.getByTestId('input');
      expect(input).toHaveProp('value', value);
    });
    test('error_status', () => {
      const error = {
          isVisible: true,
          label: 'Error de ejemplo',
        },
        onChangeText = jest.fn();
      render(<InputFullName error={error} onChangeText={onChangeText} />);
      const input = screen.getByTestId('input'),
        viewErrorMessage = screen.getByTestId('errorMessage');
      expect(input).toHaveStyle(styles.inputError);
      expect(viewErrorMessage).toHaveProp('isVisible', true);
      expect(viewErrorMessage).toHaveProp('label', error.label);
    });
  });
  describe('actions', () => {
    test('call_onChange_event', () => {
      const dataEvent = 'Hola',
        onChangeText = jest.fn();
      render(<InputFullName onChangeText={onChangeText} />);
      const input = screen.getByTestId('input');
      fireEvent.changeText(input, dataEvent);
      expect(onChangeText).toBeCalledTimes(1);
      expect(onChangeText).toBeCalledWith(dataEvent);
    });
  });
});
