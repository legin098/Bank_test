import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {
  Button,
  Header,
  InputDate,
  InputText,
} from '@src/common/presenter/components';
import {PropsComponent as Props} from './models';
import {styles} from './styles';
import {Controller, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {ProductEntity} from '@src/products/domain/models';
import {formProductSchemeValidation as schemeValidation} from '../../validations';
import {PRODUCT_INITIAL_VALUES} from '../../constants';
import {addOneYearToDate, formatDate} from '@src/core/utils';

const Component = ({onNavigation}: Props) => {
  const [dateRelease, setDateRelease] = useState<string>('');

  const {
    control,
    handleSubmit,
    reset,
    formState: {isValid, errors},
  } = useForm<ProductEntity>({
    resolver: yupResolver(schemeValidation) as any,
    mode: 'onChange',
    defaultValues: PRODUCT_INITIAL_VALUES,
  });

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ctnList}>
        <Text style={styles.title}>Formulario de Registro</Text>
        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <InputText
              containerStyles={styles.ctnInput}
              value={value}
              label={'ID'}
              onChangeText={onChange}
              {...(!!errors.id?.message && {
                error: {
                  isVisible: true,
                  label: errors.id?.message,
                },
              })}
            />
          )}
          name="id"
          rules={{required: true}}
        />
        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <InputText
              containerStyles={styles.ctnInput}
              value={value}
              label={'Nombre'}
              onChangeText={onChange}
              {...(!!errors.name?.message && {
                error: {
                  isVisible: true,
                  label: errors.name?.message,
                },
              })}
            />
          )}
          name="name"
          rules={{required: true}}
        />
        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <InputText
              containerStyles={styles.ctnInput}
              value={value}
              label={'Descripción'}
              onChangeText={onChange}
              {...(!!errors.description?.message && {
                error: {
                  isVisible: true,
                  label: errors.description?.message,
                },
              })}
            />
          )}
          name="description"
          rules={{required: true}}
        />
        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <InputText
              containerStyles={styles.ctnInput}
              value={value}
              label={'Logo'}
              onChangeText={onChange}
              {...(!!errors.picture?.message && {
                error: {
                  isVisible: true,
                  label: errors.picture?.message,
                },
              })}
            />
          )}
          name="picture"
          rules={{required: true}}
        />
        <Controller
          control={control}
          render={({field: {onChange, onBlur, value}}) => (
            <InputDate
              containerStyles={styles.ctnInput}
              value={!!value ? formatDate(value, "dd'/'LL'/'yyyy") : ''}
              label={'Fecha Liberación'}
              onChange={value => {
                setDateRelease(value);
                onChange(value);
              }}
              {...(errors.dateRelease?.message && {
                error: {
                  isVisible: true,
                  label: errors.dateRelease?.message,
                },
              })}
            />
          )}
          name="dateRelease"
          rules={{required: true}}
        />
        <InputText
          containerStyles={styles.ctnInput}
          inputStyles={styles.disableInput}
          value={addOneYearToDate(dateRelease)}
          editable={false}
          label={'Fecha Revisión'}
        />

        <Button text="Enviar" containerStyles={styles.btnSend} />
        <Button
          text="Reiniciar"
          type="gray_light"
          containerStyles={styles.btnReset}
        />
      </ScrollView>
    </View>
  );
};

export default Component;
