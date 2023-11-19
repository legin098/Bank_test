import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '@common/presenter/theme';

const {width} = Dimensions.get('window');

const SIZE_HEIGHT = width * 0.12;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  label: {
    fontWeight: '100',
    fontSize: 14,
    color: COLORS.common.gray,
    marginBottom: width * 0.02,
  },
  input: {
    fontWeight: '500',
    color: COLORS.common.gray_black,
    paddingHorizontal: width * 0.03,
    fontSize: 16,
    width: '100%',
    height: SIZE_HEIGHT,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.common.gray,
  },
  inputError: {
    borderColor: COLORS.common.red,
  },
  ctnError: {
    width: '100%',
    marginTop: 4,
  },
  error: {
    fontWeight: '500',
    fontSize: 14,
    color: COLORS.common.red,
  },
});
