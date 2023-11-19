import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {Props} from './models';
import {styles} from './styles';

const Right = require('../../../../assets/images/right.png');

const ProductCard = ({containerStyles, product, onPress}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      style={[styles.container, containerStyles]}
      onPress={onPress}>
      <View>
        <Text style={styles.nameProduct}>{product.name}</Text>
        <Text style={styles.idProduct}>ID: {product.id}</Text>
      </View>
      <Image source={Right} />
    </TouchableOpacity>
  );
};

export default ProductCard;
