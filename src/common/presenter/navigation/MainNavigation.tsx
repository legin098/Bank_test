import {createStackNavigator} from '@react-navigation/stack';
import {MainStackParamList} from '../models/navigation.model';
import ProductsNavigation from '@src/products/presenter/navigation';

const Stack = createStackNavigator<MainStackParamList>();

const MainStackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Products"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Products'} component={ProductsNavigation} />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
