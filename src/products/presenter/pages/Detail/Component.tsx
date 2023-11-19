import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {Button, Header} from '@src/common/presenter/components';
import {PropsComponent as Props} from './models';
import {styles} from './styles';
import {PRODUCT_INITIAL_VALUES} from '../../constants';
import {formatDate} from '@src/core/utils';

const Component = ({product = PRODUCT_INITIAL_VALUES}: Props) => {
  const dateRelease = formatDate(product.dateRelease, 'dd/MM/yyyy');
  const dateRevision = formatDate(product.dateRevision, 'dd/MM/yyyy');

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ctnList}>
        <View style={styles.ctnInfo}>
          <View style={styles.ctnProductId}>
            <Text style={styles.labelId}>ID: {product.id}</Text>
            <Text style={styles.labelInformation}>Información extra</Text>
          </View>

          <View style={styles.ctnLabels}>
            <Text style={styles.labelInfo}>Nombre</Text>
            <Text style={styles.labelValue}>{product.name}</Text>
          </View>
          <View style={styles.ctnLabels}>
            <Text style={styles.labelInfo}>Descripción</Text>
            <Text style={styles.labelValue}>{product.description}</Text>
          </View>
          <View style={styles.ctnImage}>
            <Text style={styles.labelLogo}>Logo</Text>
            <Image source={{uri: product.picture}} style={styles.image} />
          </View>
          <View style={styles.ctnLabels}>
            <Text style={styles.labelInfo}>Fecha liberación</Text>
            <Text style={styles.labelValue}>{dateRelease}</Text>
          </View>
          <View style={styles.ctnLabels}>
            <Text style={styles.labelInfo}>Fecha revisión</Text>
            <Text style={styles.labelValue}>{dateRevision}</Text>
          </View>
        </View>

        <View style={styles.ctnButtons}>
          <Button text="Editar" />
          <Button
            text="Eliminar"
            type="red"
            containerStyles={styles.ctnButton}
            textStyle={styles.textButton}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Component;
