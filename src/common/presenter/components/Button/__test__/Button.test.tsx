import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import Button from '../Button';
import {COLORS} from '@common/presenter/theme';
import {StyleProp, ViewStyle} from 'react-native';

describe('test_button', () => {
  describe('render', () => {
    test('button_text', () => {
      const text = 'example';
      const onPress = jest.fn();

      render(<Button text={text} onPress={onPress} />);

      expect(screen.getByText(text)).toBeTruthy();
    });
    test('button_type_yellow', () => {
      const text = 'buttonText';
      const onPress = jest.fn();

      render(<Button text={text} onPress={onPress} />);

      const button = screen.getByTestId('container');
      const buttonStyle = button.props.style;

      expect(buttonStyle.backgroundColor).toBe(COLORS.common.yellow);
    });
    test('button_type_red', () => {
      const text = 'buttonText';
      const onPress = jest.fn();

      render(<Button type={'red'} text={text} onPress={onPress} />);

      const button = screen.getByTestId('container');
      const buttonStyle = button.props.style;

      expect(buttonStyle.backgroundColor).toBe(COLORS.common.red);
    });
    test('button_container_styles', () => {
      const containerStyles: StyleProp<ViewStyle> = {marginVertical: 10};
      const onPress = jest.fn();
      const text = 'buttonText';

      render(
        <Button
          containerStyles={containerStyles}
          text={text}
          onPress={onPress}
        />,
      );

      const button = screen.getByTestId('container');
      const buttonStyle = button.props.style;

      expect(buttonStyle.marginVertical).toBe(10);
    });
  });
  describe('actions', () => {
    test('call_onPress_event', () => {
      const onPress = jest.fn();
      const text = 'buttonText';

      render(<Button onPress={onPress} text={text} />);

      const component = screen.getByTestId('container');

      fireEvent.press(component);
      expect(onPress).toBeCalledTimes(1);
    });
  });
});
