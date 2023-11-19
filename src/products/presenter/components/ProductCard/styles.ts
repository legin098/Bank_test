import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '@common/presenter/theme';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.common.gray_light,
    paddingHorizontal: width * 0.04,
    paddingVertical: width * 0.03,
  },
  nameProduct: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.common.black,
  },
  idProduct: {
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.common.gray,
    marginTop: width * 0.01,
  },
});
