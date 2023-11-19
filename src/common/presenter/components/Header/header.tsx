import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import {Props} from './models';
import {styles} from './styles';

const Logo = require('../../../../assets/images/BancoPichincha.png');
const GoBack = require('../../../../assets/images/goBack.png');

const HeaderHome = ({containerStyles, onPress}: Props) => {
  return (
    <View style={[styles.container, containerStyles]}>
      {onPress && (
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.goBack}
          onPress={onPress}>
          <Image source={GoBack} resizeMode="contain" />
        </TouchableOpacity>
      )}
      <Image source={Logo} resizeMode="contain" style={styles.image} />
    </View>
  );
};
export default HeaderHome;
