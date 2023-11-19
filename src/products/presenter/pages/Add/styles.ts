import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '@common/presenter/theme';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width,
    backgroundColor: COLORS.common.white,
  },
  ctnList: {
    flexGrow: 1,
    width,
    marginTop: width * 0.04,
    paddingTop: width * 0.1,
    paddingHorizontal: '6%',
    paddingBottom: height * 0.03,
    borderTopWidth: 1,
    borderTopColor: COLORS.common.gray_light,
  },
});
