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
import {styles, MODAL_HEIGHT} from './styles';
import Button from '../../Button';

const Cancel = require('../../../../../assets/images/cancel.png');

const ModalDelete = ({
  isVisible = false,
  modalHeight = MODAL_HEIGHT,
  product = '',
  onClose,
  onDelete,
}: Props) => (
  <Modal visible={isVisible} animationType={'slide'} transparent={true}>
    <View style={styles.ctnModal}>
      <TouchableOpacity
        activeOpacity={0.9}
        style={styles.background}
        onPress={onClose}
      />
      <View style={[styles.container, {height: modalHeight}]}>
        <TouchableOpacity style={styles.ctnHeader} onPress={onClose}>
          <Image source={Cancel} style={styles.close} resizeMode="contain" />
        </TouchableOpacity>
        <ScrollView bounces={false} style={styles.ctnText}>
          <Text
            style={
              styles.text
            }>{`¿Estás seguro de eliminar el producto ${product}?`}</Text>
        </ScrollView>
        <View style={styles.ctnButtons}>
          <Button text="Continuar" onPress={onDelete} />
          <Button text="Cancelar" type="gray_light" onPress={onClose} />
        </View>
      </View>
    </View>
  </Modal>
);

export default ModalDelete;
