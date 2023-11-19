import React from 'react';
import {SafeAreaView, ActivityIndicator, Text} from 'react-native';
import {styles} from './styles';
import {COLORS} from '@common/presenter/theme';

const PageLoading = () => (
  <SafeAreaView style={styles.container}>
    <ActivityIndicator size="large" color={COLORS.common.black} />
    <Text>{'The view is charging...'}</Text>
  </SafeAreaView>
);

export default PageLoading;
