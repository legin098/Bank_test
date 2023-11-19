import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '@common/presenter/theme';

const {width} = Dimensions.get('window');

const SIZE_HEIGHT = width * 0.12;

export const styles = StyleSheet.create({
  container: {
    height: SIZE_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    borderRadius: 5,
  },
  label: {
    fontWeight: '600',
    fontSize: 16,
    color: COLORS.common.black,
  },
  iconLeft: {
    marginLeft: width * 0.02,
  },
  iconRight: {
    marginRight: width * 0.02,
  },
});
