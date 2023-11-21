import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '@src/common/presenter/theme';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(1,1,1,0.7)',
  },
  ctnLoading: {
    width: width * 0.3,
    height: width * 0.26,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.common.white,
  },
  msm: {
    fontSize: 14,
    color: COLORS.common.yellow,
    fontWeight: '700',
    marginTop: width * 0.03,
  },
});
