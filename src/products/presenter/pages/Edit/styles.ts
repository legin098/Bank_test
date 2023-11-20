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
    paddingTop: width * 0.035,
    paddingHorizontal: '6%',
    paddingBottom: height * 0.03,
    borderTopWidth: 1,
    borderTopColor: COLORS.common.gray_light,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: width * 0.05,
  },
  ctnInput: {
    marginBottom: width * 0.027,
  },
  disableInput: {
    opacity: 0.3,
    backgroundColor: COLORS.common.gray_light,
  },
  btnSend: {
    marginTop: width * 0.05,
  },
  btnReset: {
    marginVertical: width * 0.025,
  },
});
