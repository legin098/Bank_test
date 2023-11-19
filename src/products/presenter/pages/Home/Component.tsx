import React from 'react';
import {Text, View} from 'react-native';
import {PropsComponent as Props} from './models';

const Component = ({listProducts = []}: Props) => {
  return (
    <View>
      <Text>List products</Text>
    </View>
  );
};

export default Component;
