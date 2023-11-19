import React, {lazy} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SuspendedView} from '@common/presenter/components';
import {ProductStackParamList} from '@common/presenter/models';
import {Text, View} from 'react-native';

const Stack = createStackNavigator<ProductStackParamList>();

//const SignIn = lazy(() => import('../pages/SignIn'));

const ProductsNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home">
        {props => (
          <SuspendedView>
            <View>
              <Text>Products!</Text>
            </View>
          </SuspendedView>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default ProductsNavigation;
