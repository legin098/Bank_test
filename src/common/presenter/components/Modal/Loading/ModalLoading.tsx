import React from 'react';
import {Modal, ActivityIndicator, View, Text} from 'react-native';
import {Props} from './models';
import {styles} from './styles';
import {COLORS} from '@src/common/presenter/theme';

const ModalLoading = ({isVisible = false}: Props) => (
  <Modal
    testID="modal"
    visible={isVisible}
    animationType={'fade'}
    transparent={true}>
    <View testID="container" style={styles.container}>
      <View testID="container_loading" style={styles.ctnLoading}>
        <ActivityIndicator
          testID="activity_indicator"
          size={'large'}
          color={COLORS.common.yellow}
        />
        <Text style={styles.msm}>{'Loading...'}</Text>
      </View>
    </View>
  </Modal>
);

export default ModalLoading;
