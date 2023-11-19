import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '@common/presenter/theme';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    alignItems: 'center',
    backgroundColor: COLORS.common.white_light,
  },
});
