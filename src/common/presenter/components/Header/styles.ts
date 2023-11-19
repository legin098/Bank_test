import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: '6%',
    justifyContent: 'center',
    alignItems: 'center',
    width,
    height: width * 0.1,
  },
  goBack: {
    position: 'absolute',
    left: '6%',
    zIndex: 10,
  },
  image: {
    height: width * 0.1,
    alignSelf: 'center',
  },
});
