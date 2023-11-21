import React from 'react';
import {
  Modal,
  View,
  TouchableOpacity,
  Text,
  Image,
  ScrollView,
} from 'react-native';
import {PropsModalFilters as Props} from './models';
import {styles} from './styles';
import Button from '../../Button';

const Cancel = require('../../../../../assets/images/cancel.png');

const ModalDelete = ({
  isVisible = false,
  product = '',
  onClose,
  onDelete,
}: Props) => (
  <Modal
    testID="modal"
    visible={isVisible}
    animationType={'slide'}
    transparent={true}>
    <View testID="container_modal" style={styles.ctnModal}>
      <TouchableOpacity
        testID="btn_background"
        activeOpacity={0.9}
        style={styles.background}
        onPress={onClose}
      />
      <View testID="container_body" style={styles.container}>
        <View style={styles.ctnHeader}>
          <TouchableOpacity testID="btn_close" onPress={onClose}>
            <Image source={Cancel} style={styles.close} resizeMode="contain" />
          </TouchableOpacity>
        </View>

        <ScrollView
          testID="container_text"
          bounces={false}
          style={styles.ctnText}>
          <Text
            testID="message"
            style={
              styles.text
            }>{`¿Estás seguro de eliminar el producto ${product}?`}</Text>
        </ScrollView>
        <View testID="container_buttons" style={styles.ctnButtons}>
          <Button testID="btn_continuar" text="Continuar" onPress={onDelete} />
          <Button
            testID="btn_cancelar"
            text="Cancelar"
            type="gray_light"
            onPress={onClose}
          />
        </View>
      </View>
    </View>
  </Modal>
);

export default ModalDelete;
