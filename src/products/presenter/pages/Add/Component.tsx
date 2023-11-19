import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Header} from '@src/common/presenter/components';
import {PropsComponent as Props} from './models';
import {styles} from './styles';

const Component = ({onNavigation}: Props) => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ctnList}>
        <View>
          <Text>Formulario de Registro</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Component;
