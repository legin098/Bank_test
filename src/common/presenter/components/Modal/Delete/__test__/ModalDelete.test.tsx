import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react-native';
import ModalDelete from '../ModalDelete';

jest.mock('@src/common/presenter/components/Button', () => (props: any) => (
  //@ts-ignore
  <mock-button {...props} />
));

describe('test_modal_delete', () => {
  describe('render', () => {
    test('renders_with_is_visible_true', () => {
      //@ts-ignore
      render(<ModalDelete isVisible={true} />);

      expect(screen.getByTestId('modal')).toBeTruthy();
      expect(screen.getByTestId('container_modal')).toBeTruthy();
      expect(screen.getByTestId('container_body')).toBeTruthy();
      expect(screen.getByTestId('btn_close')).toBeTruthy();
      expect(screen.getByTestId('container_text')).toBeTruthy();
      expect(screen.getByTestId('message')).toBeTruthy();
      expect(screen.getByTestId('container_buttons')).toBeTruthy();
      expect(screen.getByTestId('btn_continuar')).toBeTruthy();
      expect(screen.getByTestId('btn_cancelar')).toBeTruthy();
    });
  });

  describe('actions', () => {
    test('call_onClose_event', () => {
      const onDelete = jest.fn();
      const onClose = jest.fn();

      render(<ModalDelete isVisible onClose={onClose} onDelete={onDelete} />);

      const closeButton = screen.getByTestId('btn_close');

      fireEvent.press(closeButton);
      expect(onClose).toHaveBeenCalledTimes(1);
    });

    test('call_onDelete_event', () => {
      const onDelete = jest.fn();
      const onClose = jest.fn();

      render(<ModalDelete isVisible onDelete={onDelete} onClose={onClose} />);

      const continueButton = screen.getByTestId('btn_continuar');

      fireEvent.press(continueButton);
      expect(onDelete).toHaveBeenCalledTimes(1);
    });
  });
});
