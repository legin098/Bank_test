import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '@common/presenter/theme';

const {width} = Dimensions.get('window');

const SIZE_HEIGHT = width * 0.12;

export const stylesInput = StyleSheet.create({
  container: {
    width: '100%',
  },
  ctnInput: {
    width: '100%',
    height: SIZE_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: width * 0.03,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.common.gray,
  },
  label: {
    fontSize: 14,
    color: COLORS.common.black,
    marginBottom: width * 0.02,
  },
  ctnValue: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    marginRight: width * 0.03,
  },
  value: {
    fontSize: 17,
    fontWeight: '500',
    color: COLORS.common.black,
  },
  placeholder: {
    fontSize: 17,
    fontWeight: '500',
    color: COLORS.common.gray_medium,
  },
  ctnError: {
    width: '100%',
    marginTop: 4,
  },
  errorInput: {
    borderColor: COLORS.common.red,
  },
});

export const stylesModalPicker = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  backgroundView: {
    width: '100%',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  ctnPicker: {
    width: '100%',
    backgroundColor: COLORS.common.white,
  },
  ctnButtons: {
    width: '100%',
    height: width * 0.11,
    backgroundColor: COLORS.common.gray_light,
    paddingHorizontal: width * 0.03,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ctnPickers: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.02,
    backgroundColor: '100%',
  },
  ctnPickerDays: {
    width: width * 0.23,
  },
  ctnPickerMonths: {
    width: width * 0.45,
  },
  ctnPickerYears: {
    width: width * 0.32,
  },
  buttons: {
    fontSize: 17,
    color: COLORS.common.black,
    fontWeight: '500',
  },
});
