import React from 'react';
import {render, screen} from '@testing-library/react-native';
import SuspendedView from '../SuspendedView';
import {Text, View} from 'react-native';

describe('test_suspended_view', () => {
  describe('render', () => {
    test('renders_with_has_safe_area', () => {
      render(
        <SuspendedView>
          <View>
            <Text>Content</Text>
          </View>
        </SuspendedView>,
      );

      expect(screen.getByTestId('container')).toBeTruthy();
      expect(screen.getByText('Content')).toBeTruthy();
    });

    test('renders_without_has_safe_area', () => {
      render(
        <SuspendedView hasSafeArea>
          <View>
            <Text>Content</Text>
          </View>
        </SuspendedView>,
      );

      expect(screen.getByTestId('safeAreaView')).toBeTruthy();
      expect(screen.getByText('Content')).toBeTruthy();
    });
  });
});
