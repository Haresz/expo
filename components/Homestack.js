import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import LoginScreen from './screen/LoginScreen';
import RegistrasiScreen from './screen/RegisterScreen';

const screen = {
  LoginScreen:{
    screen: LoginScreen,
    options: {headerTransparent: true}
  },
  RegistrasiScreen:{
    screen: RegistrasiScreen,
    options: {headerTransparent: true}
  },
}

const HomeStack = createStackNavigator(screen);

export default createAppContainer(HomeStack);