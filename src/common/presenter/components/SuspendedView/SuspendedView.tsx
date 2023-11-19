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
        style={[styles.container, containerStyles && containerStyles]}>
        {children}
      </SafeAreaView>
    ) : (
      <View style={[styles.container, containerStyles && containerStyles]}>
        {children}
      </View>
    )}
  </Suspense>
);

export default SuspendedView;
