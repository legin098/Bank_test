import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '@common/presenter/theme';

const {width, height} = Dimensions.get('window');

export const MODAL_HEIGHT = height * 0.36;

export const styles = StyleSheet.create({
  ctnModal: {
    width: '100%',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  background: {
    flex: 1,
    width: '100%',
  },
  container: {
    width: '100%',
    height: MODAL_HEIGHT,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: 'center',
    backgroundColor: COLORS.common.white,
  },
  ctnHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderBottomColor: COLORS.common.gray_light,
    borderBottomWidth: 1,
    paddingHorizontal: '6%',
    paddingVertical: width * 0.05,
  },
  btnClose: {},
  close: {
    width: width * 0.035,
    height: width * 0.035,
    opacity: 0.5,
  },
  ctnText: {
    width: '100%',
    paddingHorizontal: '6%',
    paddingTop: width * 0.02,
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: 15,
    paddingBottom: width * 0.07,
  },
  ctnButtons: {
    height: '52%',
    width: '100%',
    paddingHorizontal: '6%',
    borderTopColor: COLORS.common.gray_light,
    borderTopWidth: 1,
    gap: width * 0.04,
    paddingBottom: width * 0.04,
    paddingTop: width * 0.02,
  },
});
