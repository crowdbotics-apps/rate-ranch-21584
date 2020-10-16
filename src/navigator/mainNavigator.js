import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Add-Item145661Navigator from '../features/Add-Item145661/navigator';
import Maps145657Navigator from '../features/Maps145657/navigator';
import UserProfile145653Navigator from '../features/UserProfile145653/navigator';
import BlankScreen0145630Navigator from '../features/BlankScreen0145630/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Add-Item145661: { screen: Add-Item145661Navigator },
Maps145657: { screen: Maps145657Navigator },
UserProfile145653: { screen: UserProfile145653Navigator },
BlankScreen0145630: { screen: BlankScreen0145630Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
