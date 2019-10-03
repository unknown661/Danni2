import { createBottomTabNavigator} from 'react-navigation-tabs';

import homescreen from ',/home';
import homescreen from ',/about';
import homescreen from ',/settings';





export default createBottomTabNavigator ({
Home: homescreen,
About: aboutscreen,
Settings: settingscreen,
  
})