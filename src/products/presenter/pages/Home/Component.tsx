import React, {Fragment, useEffect, useState} from 'react';
import {View} from 'react-native';
import {KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view';
import {Button, Header, InputSearch} from '@src/common/presenter/components';
import {PropsComponent as Props} from './models';
import {styles} from './styles';
import {ProductCard} from '../../components';
import {ProductEntity} from '@src/products/domain/models';
import {RG_REMOVE_SPACE} from '@src/core/constants';

const Component = ({listProducts = [], onNavigation}: Props) => {
  const [inputSearch, setInputSearch] = useState<string>('');
  const [currentProducts, setCurrentProducts] = useState<ProductEntity[]>([]);

  const handleOnSearch = (keyword: string) => {
    setInputSearch(keyword);
    const verifyEmpty = keyword === '';
    if (verifyEmpty) {
      setCurrentProducts(listProducts);
      return;
    }
    const temp: ProductEntity[] = listProducts.filter(product => {
      const {name, id} = product;
      const tempName = name.toLowerCase().replace(RG_REMOVE_SPACE, '');
      const tempID = id.toLowerCase().replace(RG_REMOVE_SPACE, '');
      const tempSearchWord = keyword.toLowerCase().replace(RG_REMOVE_SPACE, '');
      const verifyIncludes =
        tempName.includes(tempSearchWord) || tempID.includes(tempSearchWord);
      return verifyIncludes;
    });
    setCurrentProducts([...temp]);
  };

  useEffect(() => {
    const verify = listProducts.length > 0;
    verify && setCurrentProducts(listProducts);
  }, [listProducts]);

  return (
    <View style={styles.container}>
      <Header />
      <KeyboardAwareFlatList
        bounces={false}
        contentContainerStyle={styles.ctnList}
        data={currentProducts}
        keyExtractor={item => `product_${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponentStyle={styles.ctnHeaderList}
        ListHeaderComponent={
          <Fragment>
            <InputSearch
              placeholder="Search..."
              value={inputSearch}
              onChangeText={handleOnSearch}
            />
          </Fragment>
        }
        renderItem={({item, index}) => {
          const isFirst = index === 0;
          const isLatest = index === listProducts.length - 1;

          return (
            <ProductCard
              product={item}
              containerStyles={[
                isFirst && styles.firstProduct,
                isLatest && styles.latestProduct,
              ]}
              onPress={() => onNavigation('Detail', {...item})}
            />
          );
        }}
      />
      <View style={styles.ctnButton}>
        <Button text="Agregar" onPress={() => onNavigation('Add')} />
      </View>
    </View>
  );
};

export default Component;
