import React, {Fragment, useState} from 'react';
import Input from './Input';
import ModalPicker from './ModalPicker';
import {Props} from './models';
import {INITIAL_STATE_ERROR} from '@src/core/constants';

const InputDate = ({
  containerStyles,
  label = '',
  value = '',
  placeholder = '',
  editable = true,
  error = INITIAL_STATE_ERROR,
  onChange,
}: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const handleOnChange = (date: string) => {
    onChange(date);
    setIsVisible(false);
  };
  return (
    <Fragment>
      <ModalPicker
        isVisible={isVisible}
        value={value}
        onChange={handleOnChange}
        onClose={() => setIsVisible(false)}
      />
      <Input
        containerStyles={containerStyles}
        label={label}
        value={value}
        placeholder={placeholder}
        error={error}
        {...(editable && {onPress: () => setIsVisible(true)})}
      />
    </Fragment>
  );
};

export default InputDate;
