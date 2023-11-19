import {Dimensions, StyleSheet} from 'react-native';
import {COLORS} from '@common/presenter/theme';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  ctnInfo: {
    flex: 1,
  },
  ctnProductId: {
    width: '100%',
    marginBottom: width * 0.1,
  },
  labelId: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.common.black,
  },
  labelInformation: {
    fontSize: 16,
    fontWeight: '500',
    color: COLORS.common.gray,
  },
  ctnLabels: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: width * 0.05,
  },
  labelInfo: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.common.gray,
    width: '40%',
  },
  labelValue: {
    fontSize: 15,
    fontWeight: '500',
    color: COLORS.common.black,
    width: '50%',
    textAlign: 'right',
  },
  ctnImage: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: width * 0.05,
  },
  labelLogo: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.common.gray,
    width: '25%',
  },
  image: {
    width: width * 0.5,
    height: width * 0.28,
  },
  ctnButtons: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
  },
  ctnButton: {
    marginTop: width * 0.02,
  },
  textButton: {
    color: COLORS.common.white,
  },
});
