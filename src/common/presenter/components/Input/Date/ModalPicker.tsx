import React, {useState} from 'react';
import {Modal, View, TouchableOpacity, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {getDaysInMonth} from './utils';
import {PropsModalPicker as Props} from './models';
import {IDataInputList} from '@src/common/presenter/models';
import {stylesModalPicker as styles} from './styles';
import {
  MONTHS_NAMES,
  YEARS_NAMES,
  INITIAL_DAY,
  INITIAL_MONTH,
  INITIAL_YEAR,
} from './constants';

const ModalPicker = ({
  isVisible = false,
  value = '',
  onChange,
  onClose,
}: Props) => {
  const [selectedMonth, setSelectedMonth] = useState<string>(INITIAL_MONTH);
  const [selectedYear, setSelectedYear] = useState<string>(`${INITIAL_YEAR}`);
  const [selectedDay, setSelectedDay] = useState<string>(INITIAL_DAY);
  const [days, setDays] = useState<IDataInputList[]>(
    getDaysInMonth(`${INITIAL_YEAR}`, INITIAL_MONTH),
  );
  const handleOnChange = () =>
    onChange(`${selectedYear}-${selectedMonth}-${selectedDay}`);
  const handleClose = () => {
    !value && onChange('');
    onClose();
  };
  const generateDaysMonth = (year: string, month: string) => {
    const daysMonth = getDaysInMonth(year, month);
    setDays(daysMonth);
  };
  return (
    <Modal visible={isVisible} animationType={'fade'} transparent={true}>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.backgroundView}
          onPress={handleClose}
        />
        <View style={styles.ctnPicker}>
          <View style={styles.ctnButtons}>
            <Text style={styles.buttons} onPress={handleClose}>
              {'Cancelar'}
            </Text>
            <Text style={styles.buttons} onPress={handleOnChange}>
              {'Listo'}
            </Text>
          </View>
          <View style={styles.ctnPickers}>
            <Picker
              style={styles.ctnPickerDays}
              selectedValue={selectedDay}
              onValueChange={value => setSelectedDay(value)}>
              {days.map((e, i) => (
                <Picker.Item key={`day_${i}`} label={e.label} value={e.value} />
              ))}
            </Picker>
            <Picker
              style={styles.ctnPickerMonths}
              selectedValue={selectedMonth}
              onValueChange={(value, index) => {
                generateDaysMonth(selectedYear, value);
                setSelectedMonth(value);
              }}>
              {MONTHS_NAMES.map((e, i) => (
                <Picker.Item
                  key={`month_${e.value}`}
                  label={e.label || ''}
                  value={e.value}
                />
              ))}
            </Picker>
            <Picker
              style={styles.ctnPickerYears}
              selectedValue={selectedYear}
              onValueChange={value => {
                generateDaysMonth(value, selectedMonth);
                setSelectedYear(value);
              }}>
              {YEARS_NAMES.map((e, i) => (
                <Picker.Item
                  key={`year_${e.value}`}
                  label={e.label}
                  value={e.value}
                />
              ))}
            </Picker>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalPicker;
