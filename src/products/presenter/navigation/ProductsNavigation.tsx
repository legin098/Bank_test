import React, {lazy} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SuspendedView} from '@common/presenter/components';
import {ProductStackParamList} from '@common/presenter/models';

const Stack = createStackNavigator<ProductStackParamList>();

const Home = lazy(() => import('../pages/Home'));

const ProductsNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home">
        {props => (
          <SuspendedView hasSafeArea>
            <Home {...props} />
          </SuspendedView>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default ProductsNavigation;
