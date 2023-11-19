import {COLORS} from '@src/common/presenter/theme';
import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export const stylesInputSearch = StyleSheet.create({
  container: {
    width: '100%',
    height: width * 0.1,
    paddingHorizontal: width * 0.02,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.common.white,
    borderColor: COLORS.common.gray_medium,
    borderWidth: 1,
    borderRadius: 5,
  },
  input: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    marginLeft: width * 0.02,
    fontSize: 15,
    color: COLORS.common.gray,
    paddingVertical: width * 0.02,
  },
});
