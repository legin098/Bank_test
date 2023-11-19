import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import Button from '../Button';
import {COLORS} from '@common/presenter/theme';
import {StyleProp, TextStyle, ViewStyle} from 'react-native';
//@ts-ignore
jest.mock('@common/presenter/components/Icon', () => (props: any) => (
  //@ts-ignore
  <mock-icon {...props} />
));

describe('test_button', () => {
  describe('render', () => {
    test('button_text', () => {
      const text = 'example',
        onPress = jest.fn();
      render(<Button text={text} onPress={onPress} />);
      expect(screen.getByText(text)).toBeTruthy();
    });
    test('button_icon_left', () => {
      const onPress = jest.fn();
      render(<Button icon={'Chat'} onPress={onPress} />);
      expect(screen.getByTestId('iconLeft')).toBeTruthy();
    });
    test('button_icon_right', () => {
      const onPress = jest.fn();
      render(<Button iconPosition={'right'} icon={'Chat'} onPress={onPress} />);
      expect(screen.getByTestId('iconRight')).toBeTruthy();
    });
    test('button_type_green', () => {
      const text = 'buttonText',
        onPress = jest.fn();
      render(<Button text={text} icon={'Chat'} onPress={onPress} />);
      const button = screen.getByTestId('container'),
        textButton = screen.getByText(text),
        iconButton = screen.getByTestId('iconLeft');
      expect(button).toHaveStyle({backgroundColor: COLORS.common.green});
      expect(textButton).toHaveStyle({color: COLORS.common.black});
      expect(iconButton).toHaveProp('color', COLORS.common.black);
    });
    test('button_type_white', () => {
      const text = 'buttonText',
        onPress = jest.fn();
      render(
        <Button type={'white'} text={text} icon={'Chat'} onPress={onPress} />,
      );
      const button = screen.getByTestId('container'),
        textButton = screen.getByText(text),
        iconButton = screen.getByTestId('iconLeft');
      expect(button).toHaveStyle({backgroundColor: COLORS.common.white});
      expect(textButton).toHaveStyle({color: COLORS.common.black});
      expect(iconButton).toHaveProp('color', COLORS.common.black);
    });
    test('button_disable', () => {
      const text = 'buttonText',
        onPress = jest.fn();
      render(
        <Button disabled={true} text={text} icon={'Chat'} onPress={onPress} />,
      );
      const button = screen.getByTestId('container'),
        textButton = screen.getByText(text),
        iconButton = screen.getByTestId('iconLeft');
      expect(button).toHaveStyle({backgroundColor: COLORS.common.gray_light});
      expect(textButton).toHaveStyle({color: COLORS.common.gray});
      expect(iconButton).toHaveProp('color', COLORS.common.gray);
    });
    test('button_container_styles', () => {
      const containerStyles: StyleProp<ViewStyle> = {marginVertical: 10},
        onPress = jest.fn();
      render(<Button containerStyles={containerStyles} onPress={onPress} />);
      const button = screen.getByTestId('container');
      expect(button).toHaveStyle(containerStyles);
    });
    test('button_text_styles', () => {
      const textStyles: StyleProp<TextStyle> = {marginVertical: 10},
        text = 'button example',
        onPress = jest.fn();
      render(<Button textStyle={textStyles} text={text} onPress={onPress} />);
      const textButton = screen.getByText(text);
      expect(textButton).toHaveStyle(textStyles);
    });
  });
  describe('actions', () => {
    test('call_onPress_event', () => {
      const onPress = jest.fn();
      render(<Button onPress={onPress} />);
      const component = screen.getByTestId('container');
      fireEvent.press(component);
      expect(onPress).toBeCalledTimes(1);
    });
  });
});
