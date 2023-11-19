import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '@common/presenter/theme';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.common.white,
  },
  ctnList: {
    marginTop: width * 0.04,
    paddingTop: width * 0.1,
    paddingHorizontal: '6%',
    paddingBottom: height * 0.1,
    borderTopWidth: 1,
    borderTopColor: COLORS.common.gray_light,
  },
  ctnHeaderList: {
    marginBottom: width * 0.09,
  },
  firstProduct: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  latestProduct: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
