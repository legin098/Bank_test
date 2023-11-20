import React, {lazy} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SuspendedView} from '@common/presenter/components';
import {ProductStackParamList} from '@common/presenter/models';

const Stack = createStackNavigator<ProductStackParamList>();

const Home = lazy(() => import('../pages/Home'));
const Detail = lazy(() => import('../pages/Detail'));
const Add = lazy(() => import('../pages/Add'));
const Edit = lazy(() => import('../pages/Edit'));

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
      <Stack.Screen name="Detail">
        {props => (
          <SuspendedView hasSafeArea>
            <Detail {...props} />
          </SuspendedView>
        )}
      </Stack.Screen>
      <Stack.Screen name="Add">
        {props => (
          <SuspendedView hasSafeArea>
            <Add {...props} />
          </SuspendedView>
        )}
      </Stack.Screen>
      <Stack.Screen name="Edit">
        {props => (
          <SuspendedView hasSafeArea>
            <Edit {...props} />
          </SuspendedView>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default ProductsNavigation;
