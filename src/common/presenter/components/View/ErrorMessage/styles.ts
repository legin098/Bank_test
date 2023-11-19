import {StyleSheet} from 'react-native';
import {COLORS, FONTS, FONTSIZES} from '@common/presenter/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  error: {
    fontSize: FONTSIZES[14],
    fontFamily: FONTS['normal'][500],
    color: COLORS.common.red,
  },
});
