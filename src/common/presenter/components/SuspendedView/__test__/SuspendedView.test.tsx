import React from 'react';
import {View} from 'react-native';
import {render} from '@testing-library/react-native';
import '@testing-library/jest-native';
import SuspendedView from '../SuspendedView';

describe('<SuspendedView>', () => {
  test('render component', () => {
    render(
      <SuspendedView>
        <View />
      </SuspendedView>,
    );
  });
});
