import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';

export type Props = {
  hasSafeArea?: boolean;
  containerStyles?: StyleProp<ViewStyle>;
  children: React.ReactNode;
};
