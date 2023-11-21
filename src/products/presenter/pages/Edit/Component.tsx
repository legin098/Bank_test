import React, {useEffect} from 'react';
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

const Component = ({product = PRODUCT_INITIAL_VALUES, onSubmit}: Props) => {
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: {errors},
  } = useForm<ProductEntity>({
    resolver: yupResolver(schemeValidation) as any,
    mode: 'onChange',
    defaultValues: product,
  });

  const handleFormInitialization = () => {
    setValue('id', product.id);
    setValue('name', product.name);
    setValue('description', product.description);
    setValue('picture', product.picture);
    setValue('dateRelease', product.dateRelease);
    setValue('dateRevision', product.dateRevision);
    return;
  };

  useEffect(() => {
    handleFormInitialization();
  }, [product]);

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
              inputStyles={styles.disableInput}
              editable={false}
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
          render={({field: {onChange, value}}) => (
            <InputDate
              containerStyles={styles.ctnInput}
              value={!!value ? formatDate(value, "dd'/'LL'/'yyyy") : ''}
              label={'Fecha Liberación'}
              onChange={value => {
                onChange(value);
                setValue('dateRevision', addOneYearToDate(value));
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
        <Controller
          control={control}
          render={({field: {value}}) => (
            <InputText
              containerStyles={styles.ctnInput}
              inputStyles={styles.disableInput}
              value={!!value ? formatDate(value, "dd'/'LL'/'yyyy") : ''}
              editable={false}
              label={'Fecha Revisión'}
            />
          )}
          name="dateRevision"
          rules={{required: true}}
        />

        <Button
          text="Enviar"
          containerStyles={styles.btnSend}
          onPress={handleSubmit(onSubmit)}
        />
        <Button
          text="Reiniciar"
          type="gray_light"
          containerStyles={styles.btnReset}
          onPress={() => reset()}
        />
      </ScrollView>
    </View>
  );
};

export default Component;
