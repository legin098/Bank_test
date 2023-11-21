import React from 'react';
import {Suspense} from 'react';
import {SafeAreaView, View} from 'react-native';
import PageLoading from './PageLoading';
import {Props} from './models';
import {styles} from './styles';

const SuspendedView = ({
  containerStyles,
  hasSafeArea = false,
  children,
}: Props) => (
  <Suspense fallback={<PageLoading />}>
    {hasSafeArea ? (
      <SafeAreaView
        testID="safeAreaView"
        style={[styles.container, containerStyles]}>
        {children}
      </SafeAreaView>
    ) : (
      <View testID="container" style={[styles.container, containerStyles]}>
        {children}
      </View>
    )}
  </Suspense>
);

export default SuspendedView;
