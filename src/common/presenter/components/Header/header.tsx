import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {Props} from './models';
import {styles} from './styles';

const Logo = require('../../../../assets/images/BancoPichincha.png');
const GoBack = require('../../../../assets/images/goBack.png');

const Header = ({containerStyles, onPress}: Props) => {
  return (
    <View testID="container" style={[styles.container, containerStyles]}>
      {onPress && (
        <TouchableOpacity
          testID="goBack"
          activeOpacity={0.9}
          style={styles.goBack}
          onPress={onPress}>
          <Image source={GoBack} resizeMode="contain" />
        </TouchableOpacity>
      )}
      <Image
        testID="logoImg"
        source={Logo}
        resizeMode="contain"
        style={styles.image}
      />
    </View>
  );
};
export default Header;
